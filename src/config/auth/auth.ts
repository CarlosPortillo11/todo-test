import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "../prisma/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { SignInSchema } from "@/schemas/auth.schema";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = await SignInSchema.parseAsync(credentials);

        const userFromDB = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        console.log(userFromDB);
        if (!userFromDB) {
          return null;
        }

        const comparePassword = await bcrypt.compare(
          password,
          userFromDB.password
        );

        console.log({ comparePassword });
        if (!comparePassword) {
          return null;
        }

        user = {
          email: userFromDB.email,
          name: userFromDB.name,
        };

        //The login is succesfull, ask how to handle the different responses in order to be the most detailed and stick with the good practices

        //Why returns a 303 status code? Bad redirection?
        return user;
      },
    }),
  ],
});
