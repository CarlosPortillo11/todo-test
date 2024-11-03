// Dependencies: npm install lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormControlProps } from "@/types/form-control.types";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FormControlProps {
  name: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ name, placeholder, className, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="space-y-2">
        <div className="relative">
          <Input
            id={name}
            name={name}
            className={cn("pe-9", className)}
            placeholder={placeholder ?? "Password"}
            type={isVisible ? "text" : "password"}
            {...rest}
            ref={ref}
          />
          <button
            className="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
