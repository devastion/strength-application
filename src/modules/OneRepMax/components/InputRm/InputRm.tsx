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
  customClasses: string;
  error: boolean;
  errorMsg: string;
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
      customClasses = "",
      error = false,
      errorMsg,
      ...props
    },
    ref
  ) {
    return (
      <div className={customClasses}>
        <Label
          htmlFor={label.toLowerCase()}
          className="text-sm font-medium text-slate-900 dark:text-slate-200"
        >
          {label}
        </Label>
        <Input
          id={label.toLowerCase()}
          type="number"
          inputMode="decimal"
          className="my-2"
          value={value}
          ref={ref}
          max={max}
          onChange={onChangeHandle}
          onFocus={onFocusHandle}
          placeholder={placeholder}
          {...props}
        />
        {!error && <p className="text-sm text-slate-500">{paragraph}</p>}
        {error && <p className="text-sm text-red-500">{errorMsg}</p>}
      </div>
    );
  }
);
