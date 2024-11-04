import { z } from "zod";

export const ToDoSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, "Title must be at least 1 character long")
    .max(64, "Title must be at most 64 characters long"),
  content: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, "Title must be at least 1 character long")
    .max(255, "Title must be at most 255 characters long"),
  status: z.enum(["in-progress", "done"], {
    invalid_type_error: "Status must be either 'in-progress' or 'done'",
  }),
  userId: z
    .number({ invalid_type_error: "User ID must be a number" })
    .min(1, "User ID must be at least 1 character"),
});

export type ToDoValidation = z.infer<typeof ToDoSchema>;
