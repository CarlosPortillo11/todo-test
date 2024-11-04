import { AuthError } from "next-auth";
import { createSafeActionClient } from "next-safe-action";
import { ZodError } from "zod";
import { CustomError } from "./custom-error";

//Para legibilidad (números mágicos)
const defaultErrorMessage = "An error occurred";

export const actionClient = createSafeActionClient({
  handleServerError: (error) => {
    console.error(error);

    if (error instanceof AuthError) {
      //The message on the throw
      return error.cause?.err?.message;
    }

    //Instancia del CustomError en utils
    if (error instanceof CustomError) {
      console.log(error);
      return error.message;
    }

    return defaultErrorMessage;
  },
});
