"use client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToDoProps } from "@/types/todo.types";
import React, { useState } from "react";
import { TodoCard } from "./TodoCard";

export const ToDoList = ({ todos }: { todos: ToDoProps[] }) => {
  const [todoSelected, setTodoSelected] = useState<ToDoProps | null>(null);
  const [open, setOpen] = useState(false);

  const handleTodoSelected = ({ todo }: { todo: ToDoProps }) => {
    setTodoSelected(todo);
    setOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-y-5 overflow-y-scroll px-10 py-1 max-h-96 w-full">
      <TooltipProvider>
        {todos.map((todo, index) => (
          /* Make it a separate component */
          <TodoCard key={index} todo={todo} />
        ))}
      </TooltipProvider>
    </div>
  );
};

const ToDoListDataTemplate: ToDoProps[] = [
  {
    content: "Go to the supermarket and buy a couple of bananas...",
    status: "in-progress",
    title: "Buy some bananas...",
    userId: 1,
  },
  //Write some different ToDos here
  {
    content: "Take a dance class",
    status: "in-progress",
    title: "Dance",
    userId: 1,
  },
  {
    title: "Check the car",
    content: "Check the car for any issues",
    status: "in-progress",
    userId: 1,
  },
  {
    title: "Go to the gym",
    content: "Go to the gym and do some exercise",
    status: "in-progress",
    userId: 1,
  },
  {
    title: "Buy some milk",
    content: "Go to the supermarket and buy some milk",
    status: "in-progress",
    userId: 1,
  },
];
