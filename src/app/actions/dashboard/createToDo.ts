"use server";
import { prisma } from "@/config/prisma/prisma";
import { CustomError } from "@/lib/custom-error";
import { actionClient } from "@/lib/safe-action";
import { ToDoSchema } from "@/schemas/todo.schema";
import { revalidatePath } from "next/cache";

export const createToDo = actionClient
  .schema(ToDoSchema)
  .action(async ({ parsedInput: { title, content, status, userId } }) => {
    // This is where you would make the API call to create a new ToDo
    console.log({ title, content, status, userId });

    const todo = await prisma.toDo.create({
      data: {
        title,
        content,
        status,
        userId,
      },
    });
    revalidatePath("/dashboard");
  });
