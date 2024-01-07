"use client";
import React from "react";
import { selectFormulaState } from "@lib/redux/slices/formulaSlice";
import { selectUnitsState } from "@lib/redux/slices/unitsSlice";
import { History } from "@modules//History";
import { useAppSelector } from "@root/hooks";
import { Parser } from "expr-eval";

import { InputRm } from "./components/InputRm";
export const OneRepMax = () => {
  // ? Weight
  const weightRef = React.useRef<HTMLInputElement>(null);
  const [weight, setWeight] = React.useState<string>("");
  const deferredWeight = React.useDeferredValue(weight);
  function weightOnChange() {
    setWeight(weightRef.current ? weightRef.current.value : "");
  }

  // ? Repetitions
  const maxReps = 25;
  const repsRef = React.useRef<HTMLInputElement>(null);
  const [reps, setReps] = React.useState<string>("");
  const deferredReps = React.useDeferredValue(reps);
  const [repsError, setRepsError] = React.useState<boolean>(false);
  function repsOnChange() {
    if (
      (repsRef.current && Number(repsRef.current.value) < 1) ||
      Number(repsRef.current?.value) > maxReps
    ) {
      setRepsError(true);
      setReps("");
    } else {
      setRepsError(false);
      setReps(repsRef.current ? repsRef.current.value : "");
    }
  }

  const formulaState = useAppSelector(selectFormulaState);
  const unitState = useAppSelector(selectUnitsState);
  const unit = unitState === "kilograms" ? "KG" : "LB";
  const expression = Parser.parse(formulaState);
  const result =
    deferredWeight && deferredReps
      ? Math.round(
          // ? the package is types as any
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          expression.evaluate({ weight: weight, reps: reps })
        )
      : 0;

  return (
    <div className="my-3 flex flex-col items-center justify-center pb-12">
      <InputRm
        customClasses="my-5 w-10/12 md:w-full"
        data-testid="weight-input"
        ref={weightRef}
        value={weight}
        label="Weight"
        paragraph="Enter the weight you used for your lift"
        placeholder="Weight"
        max={500}
        onChangeHandle={weightOnChange}
        onFocusHandle={() => setWeight("")}
        error={false}
        errorMsg={""}
      />

      <InputRm
        customClasses="my-5 w-10/12 md:w-full"
        data-testid="reps-input"
        ref={repsRef}
        value={reps}
        label="Repetitions"
        paragraph="Enter the repetitions you have done"
        placeholder="Repetitions"
        max={25}
        onChangeHandle={repsOnChange}
        onFocusHandle={() => setReps("")}
        error={repsError}
        errorMsg="Repetitions cannot be less than 1 or greater than 25"
      />

      <h3 className="my-5 text-3xl font-bold uppercase text-slate-900 dark:text-slate-200">
        Your 1RM is
      </h3>
      <span
        data-testid="1rm-output"
        className="text-5xl font-semibold text-red-600"
      >
        {result}
        {unit}
      </span>

      <History
        page="rm"
        value={{
          weight: Number(deferredWeight),
          reps: Number(deferredReps),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          "1RM": `${result}${unit}`,
        }}
        saveIsActive={Number(deferredWeight) > 0 && Number(deferredReps) > 0}
      />
    </div>
  );
};
