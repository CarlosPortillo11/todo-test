"use server";
import { signIn } from "@/config/auth/auth";
import { actionClient } from "@/lib/safe-action";
import { SignInSchema } from "@/schemas/auth.schema";
import { redirect } from "next/navigation";

export const signInAction = actionClient
  .schema(SignInSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    console.log({ email, password });

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    redirect("/dashboard");

    //How to handle the response in case of error?
    /* if(response.error){
      //Throw or return?
      throw new Error(response.error);
      }
     */

    //What should I return to the client in order to communicate the response?
  });
