"use client";
import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

interface InputRmProps {
  label: string;
  paragraph: string;
  value: string;
  placeholder: string;
  max: number;
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
      max,
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
          inputMode="numeric"
          className="my-2"
          value={value}
          ref={ref}
          max={max}
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
