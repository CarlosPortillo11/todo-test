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
import { Textarea } from "./textarea";

interface Props
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    FormControlProps {
  name: string;
}

export const FormTextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ name, placeholder, label, description, classNames, ...rest }, ref) => {
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
              <Textarea
                {...field}
                ref={ref}
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

FormTextArea.displayName = "FormTextArea";
