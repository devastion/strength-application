"use client";
import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

interface InputRmProps {
  label: string;
  paragraph: string;
  value: string;
  placeholder: string;
  onChangeHandle: () => void;
  onFocusHandle: () => void;
}

export const InputRm = React.forwardRef<HTMLInputElement, InputRmProps>(
  function InputRm(
    {
      label,
      paragraph,
      value,
      placeholder,
      onChangeHandle,
      onFocusHandle,
      ...props
    },
    ref
  ) {
    return (
      <div className="my-5 w-10/12 md:w-full">
        <Label
          htmlFor="weight"
          className="text-sm font-medium text-slate-900 dark:text-slate-200"
        >
          {label}
        </Label>
        <Input
          id="weight"
          type="number"
          className="my-2"
          value={value}
          ref={ref}
          onChange={onChangeHandle}
          onFocus={onFocusHandle}
          placeholder={placeholder}
          {...props}
        />
        <p className="text-sm text-slate-500">{paragraph}</p>
      </div>
    );
  }
);
