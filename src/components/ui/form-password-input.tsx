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
import { PasswordInput } from "./password-input";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FormControlProps {
  name: string;
}

export const FormPasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ name, label, description, placeholder, classNames, ...rest }, ref) => {
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
              <PasswordInput
                {...field}
                ref={ref}
                name={name}
                placeholder={placeholder}
                className={cn("", classNames?.input)}
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

FormPasswordInput.displayName = "FormPasswordInput";
