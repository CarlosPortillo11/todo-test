"use client";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { ToDoSchema, ToDoValidation } from "../../../schemas/todo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/ui/form-input";
import { FormTextArea } from "../../../components/ui/form-textarea";
import { Button } from "@/components/ui/button";
import { createToDo } from "@/app/actions/dashboard/createToDo";
import { toast } from "sonner";

export const ToDoForm = () => {
  const form = useForm<ToDoValidation>({
    defaultValues: {
      title: "",
      content: "",
      status: "in-progress",
      userId: 10,
    },
    resolver: zodResolver(ToDoSchema),
  });

  const handleSubmit: () => void = form.handleSubmit(
    async (data) => {
      console.log(data);
      const response = await createToDo(data);

      console.log("response", response);

      if (response?.serverError) {
        toast.error(response.serverError);
        return;
      }

      /* form.reset(); */
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <Form {...form}>
      <form action={handleSubmit} className="grid gap-y-4">
        <FormInput
          name="title"
          placeholder="Buy some bananas..."
          label="Title"
          classNames={{
            label: "text-xl font-semibold",
            input:
              "w-full text-xl py-10 px-5 ring-4 ring-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500",
          }}
        />
        <div className="grid grid-cols-5 items-start justify-center gap-x-4">
          <div className="col-span-4">
            <FormTextArea
              name="content"
              placeholder="Go to the supermarket and buy a couple of bananas..."
              label="Content"
              classNames={{
                label: "text-xl font-semibold",
                input:
                  "w-full text-xl py-4 px-5 ring-4 ring-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500",
              }}
            />
          </div>
          <div className="col-span-1 w-full h-full flex items-end">
            <Button className="w-full h-24 text-3xl font">
              {/* <Save size={64} /> */}
              Save
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
