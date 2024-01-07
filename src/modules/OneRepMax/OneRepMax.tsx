"use client";
import React from "react";
import { History } from "@modules//History";
import { useAppDispatch, useAppSelector } from "@root/hooks";
import {
  clearHistory,
  pushToHistory,
  selectHistoryStateRM,
} from "@root/lib/redux/slices/historySlice";

import { InputRm } from "./components/InputRm";
import { YourRm } from "./components/YourRm";
export const OneRepMax = () => {
  const dispatch = useAppDispatch();
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

      <YourRm
        data-testid="1rm-output"
        weight={Number.parseInt(deferredWeight)}
        reps={Number.parseInt(deferredReps)}
      />

      <History
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        entries={useAppSelector(selectHistoryStateRM)}
        clearHistoryFn={() => dispatch(clearHistory({ page: "rm", value: {} }))}
        saveButtonFn={() =>
          dispatch(
            pushToHistory({
              page: "rm",
              value: {
                weight: Number(deferredWeight),
                reps: Number(deferredReps),
              },
            })
          )
        }
      />
    </div>
  );
};
