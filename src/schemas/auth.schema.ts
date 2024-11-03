import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string({ invalid_type_error: "The email must be a string" })
    .min(1, "The email must not be empty")
    .email("The email must be a valid email address"),
  password: z
    .string({ invalid_type_error: "The password must be a string" })
    .min(8, "The password must be at least 8 characters")
    .max(32, "The password must be at most 32 characters"),
});

export type SignInValidation = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    name: z
      .string({ invalid_type_error: "The name must be a string" })
      .min(1, "The name must not be empty"),
    email: z
      .string({ invalid_type_error: "The email must be a string" })
      .min(1, "The email must not be empty")
      .email("The email must be a valid email address"),
    password: z
      .string({ invalid_type_error: "The password must be a string" })
      .min(8, "The password must be at least 8 characters")
      .max(32, "The password must be at most 32 characters"),
    confirmPassword: z
      .string({
        invalid_type_error: "The password confirmation must be a string",
      })
      .min(8, "The password confirmation must be at least 8 characters")
      .max(32, "The password confirmation must be at most 32 characters"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpValidation = z.infer<typeof SignUpSchema>;
