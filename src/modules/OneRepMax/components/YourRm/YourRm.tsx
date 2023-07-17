"use client";
import React from "react";
import { selectFormulaState } from "@lib/redux/slices/formulaSlice";
import { selectUnitsState } from "@lib/redux/slices/unitsSlice";
import { useAppSelector } from "@root/hooks";
import { Parser } from "expr-eval";

interface YourRmProps {
  weight: number;
  reps: number;
}

export const YourRm = ({ weight, reps }: YourRmProps) => {
  const formulaState = useAppSelector(selectFormulaState);
  const unitState = useAppSelector(selectUnitsState);
  const unit = unitState === "kilograms" ? "KG" : "LB";
  const expression = Parser.parse(formulaState);
  const result =
    weight && reps
      ? Math.round(
          // ? no types
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          expression.evaluate({ weight: weight, reps: reps })
        )
      : 0;
  return (
    <>
      <h3 className="my-5 text-3xl font-bold uppercase text-slate-900 dark:text-slate-200">
        Your 1RM is
      </h3>
      <span className="text-5xl font-semibold text-red-600">
        {result}
        {unit}
      </span>
    </>
  );
};
