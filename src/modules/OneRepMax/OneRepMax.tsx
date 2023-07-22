"use client";
import React from "react";

import { InputRm } from "./components/InputRm";
import { YourRm } from "./components/YourRm";
export const OneRepMax = () => {
  // ? Weight
  const weightRef = React.useRef<HTMLInputElement>(null);
  const [weight, setWeight] = React.useState<string>("");
  const deferredWeight = React.useDeferredValue(weight);
  function weightOnChange() {
    setWeight(weightRef.current ? weightRef.current.value : "");
  }

  // ? Repetitions
  const repsRef = React.useRef<HTMLInputElement>(null);
  const [reps, setReps] = React.useState<string>("");
  const deferredReps = React.useDeferredValue(reps);
  function repsOnChange() {
    setReps(repsRef.current ? repsRef.current.value : "");
  }

  return (
    <div className="my-3 flex flex-col items-center justify-center pb-12">
      <InputRm
        data-testid="weight-input"
        ref={weightRef}
        value={weight}
        label="Weight"
        paragraph="Enter the weight you used for your lift"
        placeholder="Weight"
        onChangeHandle={weightOnChange}
        onFocusHandle={() => setWeight("")}
      />

      <InputRm
        data-testid="reps-input"
        ref={repsRef}
        value={reps}
        label="Repetitions"
        paragraph="Enter the repetitions you have done"
        placeholder="Repetitions"
        onChangeHandle={repsOnChange}
        onFocusHandle={() => setReps("")}
      />

      <YourRm
        data-testid="1rm-output"
        weight={Number.parseInt(deferredWeight)}
        reps={Number.parseInt(deferredReps)}
      />
    </div>
  );
};
