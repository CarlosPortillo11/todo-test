"use server";
import { signIn } from "@/config/auth/auth";
import { actionClient } from "@/lib/safe-action";
import { SignInSchema } from "@/schemas/auth.schema";

export const signInAction = actionClient
  .schema(SignInSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    console.log({ email, password });

    const response = await signIn("credentials", {
      email,
      password,
    });

    //How to handle the response in case of error?
    /* if(response.error){
      //Throw or return?
      throw new Error(response.error);
      }
     */

    //What should I return to the client in order to communicate the response?
    console.log(response);
  });
