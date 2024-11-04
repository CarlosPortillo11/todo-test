import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SignInSchema } from "@/schemas/auth.schema";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = await SignInSchema.parseAsync(credentials);

        /* const userFromDB = await prisma.user.findUnique({
          where: {
            email,
          },
        }); */

        //Separar la lógica para tener ambos routeHandler en ambos archivos
        //Se separa la lógica para evitar utilizar el PrismaAdapter en el runtime de auth.ts
        const userFromDB = await axios
          .post("http://localhost:3000/api/prisma", {
            email,
          })
          .then((response) => response.data)
          .catch((error) => {
            console.error("Catch from axios prisma: ", error);
            return null;
            /* throw new Error("Could not connect to the database"); */
          });

        //Se hacen adentro del route handler
        if (!userFromDB) {
          //De esta manera lo gestiona la instancia de SafeAction
          throw new Error("User not found");
        }

        //Se separa la lógica para evitar utilizar bcrypt directamente en el runtime de auth.ts
        const comparePassword = await axios
          .post("http://localhost:3000/api/bcrypt", {
            password,
            hashedPassword: userFromDB.password,
          })
          .then((response) => response.data)
          .catch((error) => {
            console.error("Catch from axios bcrypt: ", error);
            return false;
          });

        console.log({ comparePassword });
        if (!comparePassword) {
          throw new Error("Invalid password");
        }

        user = {
          id: userFromDB.id,
          email: userFromDB.email,
          name: userFromDB.name,
        };

        //The login is succesfull, ask how to handle the different responses in order to be the most detailed and stick with the good practices

        //Why returns a 303 status code? Bad redirection?
        //Retorna para firmar el token no a la función que lo llama
        return user;
      },
    }),
  ],
  //Para incluír el userId en el token de auth
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        console.log("JWT Callback: ", user);
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      console.log("Session Callback: ", token);
      session.user.id = token.id as string;
      return session;
    },
  },
});
