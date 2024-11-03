"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { FormPasswordInput } from "@/components/ui/form-password-input";
import { SignUpSchema, SignUpValidation } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
  const form = useForm<SignUpValidation>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const handleSubmit: () => void = form.handleSubmit(
    async (data) => {
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
          label="Name"
          name="name"
          placeholder="John Doe"
          classNames={{
            label: "text-sm font-semibold ",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <FormInput
          label="Email"
          name="email"
          placeholder="johndoe@gmail.com"
          classNames={{
            label: "text-sm font-semibold ",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <FormPasswordInput
          label="Password"
          name="password"
          placeholder="********"
          classNames={{
            label: "text-sm font-semibold ",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <FormPasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="********"
          classNames={{
            label: "text-sm font-semibold ",
            input: "w-full mt-1 rounded-lg shadow border border-gray-300",
          }}
        />
        <Button>Sign Up</Button>
      </form>
    </Form>
  );
};
