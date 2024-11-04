import React from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { ToDoProps } from "@/types/todo.types";

export const ToDoCredenza = (todo: ToDoProps) => {
  return (
    <Credenza>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>{todo.title}</CredenzaTitle>
          <CredenzaDescription>{todo.status}</CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>{todo.content}</CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <button>Close</button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};
