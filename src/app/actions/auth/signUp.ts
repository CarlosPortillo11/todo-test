"use server";
import { prisma } from "@/config/prisma/prisma";
import { actionClient } from "@/lib/safe-action";
import { SignUpSchema } from "@/schemas/auth.schema";
import bcrypt from "bcrypt";

export const signUpAction = actionClient
  .schema(SignUpSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    //Should I use a try/catch? R/ No, the SafeAction handles the errors
    console.log({ name, password });

    //If it doesn't return null or undefined, make it return on the catch of the promise and send the error on the falsy validation as a CustomError (cuz we're on an action)
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    console.log({ userExists });

    if (userExists) {
      //It's throw the best option here? Or shoud I "return" something else?
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const pwdHash = await bcrypt.hash(password, salt);

    //The createUser saves the right way
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: pwdHash,
      },
    });

    if (!createUser) {
      throw new Error("Error creating user");
    }

    //What should I return in this case of success?
  });
