"use server";
import { prisma } from "@/config/prisma/prisma";
import { actionClient } from "@/lib/safe-action";

export const fetchToDo = actionClient.action(async () => {
  const todos = await prisma.toDo.findMany();

  return todos;
});
