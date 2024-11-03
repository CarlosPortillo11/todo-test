import { FormControlProps } from "@/types/form-control.types";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FormControlProps {
  name: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { name, placeholder, type, label, description, classNames, ...rest },
    ref
  ) => {
    const { control } = useFormContext();

    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn("", classNames?.container)}>
            {label && (
              <FormLabel className={cn("", classNames?.label)}>
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Input
                {...field}
                ref={ref}
                type={type}
                className={cn("", classNames?.input)}
                placeholder={placeholder}
                {...rest}
              />
            </FormControl>
            {description && (
              <FormDescription className={cn("", classNames?.description)}>
                {description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);

FormInput.displayName = "FormInput";
