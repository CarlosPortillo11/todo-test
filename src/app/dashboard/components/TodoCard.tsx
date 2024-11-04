"use client";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { ToDoProps } from "@/types/todo.types";
import React, { useState } from "react";

export const TodoCard = ({ todo }: { todo: ToDoProps }) => {
  const [todoSelected, setTodoSelected] = useState<ToDoProps | null>(null);

  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="w-full px-5 py-4 ring-2 ring-blue-400 transition-all duration-500 hover:scale-105 rounded-xl">
          <div className="flex flex-col gap-y-2 col-span-5 text-left">
            <p className="text-2xl font-semibold line-clamp-1">{todo.title}</p>
            <p className="text-lg text-gray-500 line-clamp-1">{todo.content}</p>
          </div>
        </div>
      </TooltipTrigger>
    </Tooltip>
  );
};
