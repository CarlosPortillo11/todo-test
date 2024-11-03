"use client";

import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { SignInSchema, SignInValidation } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FormPasswordInput } from "../../../../components/ui/form-password-input";
import { Button } from "@/components/ui/button";

export const SignInForm = () => {
  const form = useForm<SignInValidation>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });

  const handleSubmit: () => void = form.handleSubmit(
    (data) => {
      console.log(data);
    },
    (errors) => {
      console.log(errors);
    }
  );

  return (
    <Form {...form}>
      <form
        action={handleSubmit}
        className="grid grid-cols-1 gap-y-4 items-center justify-center"
      >
        <FormInput
          label="Email"
          name="email"
          placeholder="johndoe@gmail.com"
          classNames={{
            label: "text-sm font-semibold",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <FormPasswordInput
          label="Password"
          name="password"
          placeholder="********"
          classNames={{
            label: "text-sm font-semibold",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <Button className="mt-5">Sign In</Button>
      </form>
    </Form>
  );
};
