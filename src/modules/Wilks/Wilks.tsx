"use client";
import React from "react";
import {
  selectGenderState,
  setGenderState,
} from "@lib/redux/slices/genderSlice";
import { selectUnitsState } from "@lib/redux/slices/unitsSlice";
import { useAppDispatch, useAppSelector } from "@root/hooks";
import { ItemsType } from "@root/types/itemsType";

import { InputRm } from "../OneRepMax/components/InputRm";
import { SelectButton } from "../Settings/components/SelectButton/SelectButton";

const genders: ItemsType[] = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

const maleValues: number[] = [
  -216.047_514_4,
  16.260_633_9,
  -0.002_388_645,
  -0.001_137_32,
  7.018_63 * Math.pow(10, -6),
  -1.291 * Math.pow(10, -8),
];

const femaleValues: number[] = [
  594.317_477_755_82,
  -27.238_425_364_47,
  0.821_122_268_71,
  -0.009_307_339_13,
  4.731_582 * Math.pow(10, -5),
  -9.054 * Math.pow(10, -8),
];

function calculateWilks(gender: string, bodyWeight: number, total: number) {
  let coeff = 0;
  const values = gender === "male" ? maleValues : femaleValues;

  for (let i = 0; i < 6; i++) {
    coeff += i === 0 ? values[i] : values[i] * Math.pow(bodyWeight, i);
  }

  return total * (500 / coeff);
}

export const Wilks = () => {
  const dispatch = useAppDispatch();

  const selectedGender = useAppSelector(selectGenderState);
  const [gender, setGender] = React.useState(selectedGender);

  React.useEffect(() => {
    dispatch(setGenderState(gender));
  }, [dispatch, gender]);

  const unitState = useAppSelector(selectUnitsState);
  const unit = unitState === "kilograms" ? "KG" : "LB";

  // ? Bodyweight Input
  const bwRef = React.useRef<HTMLInputElement>(null);
  const [bw, setBw] = React.useState<string>("");
  const defferedBw = React.useDeferredValue(bw);
  function bwOnChange() {
    setBw(bwRef.current ? bwRef.current.value : "");
  }

  // ? Total Input
  const totalRef = React.useRef<HTMLInputElement>(null);
  const [total, setTotal] = React.useState<string>("");
  const defferedTotal = React.useDeferredValue(total);
  function totalOnChange() {
    setTotal(totalRef.current ? totalRef.current.value : "");
  }

  const [wilks, setWilks] = React.useState(0);

  React.useEffect(() => {
    if (defferedBw && defferedTotal) {
      const bodyWeight = Number(defferedBw);
      const liftedTotal = Number(defferedTotal);
      const wilksScore = Number(
        calculateWilks(gender, bodyWeight, liftedTotal).toFixed(2)
      );
      setWilks(wilksScore);
    } else {
      setWilks(0);
    }
  }, [defferedBw, defferedTotal, gender]);

  return (
    <div className="my-3 flex flex-col items-center justify-center gap-2 pb-12">
      <div className="my-3 flex w-9/12 flex-col justify-center gap-2">
        <SelectButton
          label="Select Gender"
          placeholder="Select Gender"
          items={genders}
          value={gender}
          setValue={setGender}
          heading="Select Gender"
        />
      </div>

      <div className="mb-3 flex w-9/12 flex-col justify-center gap-2">
        <InputRm
          customClasses=""
          data-testid="bodyweight-input"
          ref={bwRef}
          value={bw}
          label="Bodyweight"
          paragraph={`Enter your bodyweight in ${unit}`}
          placeholder="Bodyweight"
          max={500}
          onChangeHandle={bwOnChange}
          onFocusHandle={() => setBw("")}
        />
      </div>

      <div className="mb-3 flex w-9/12 flex-col justify-center gap-2">
        <InputRm
          customClasses=""
          data-testid="total-input"
          ref={totalRef}
          value={total}
          label="Total"
          paragraph={`Enter your total in ${unit}`}
          placeholder="Total"
          max={1500}
          onChangeHandle={totalOnChange}
          onFocusHandle={() => setTotal("")}
        />
      </div>

      <div className="mb-3 flex w-9/12 flex-col items-center justify-center gap-2 text-center">
        <h3 className="my-5 text-3xl font-bold uppercase text-slate-900 dark:text-slate-200">
          Your Wilks Score is
        </h3>
        <span
          className="text-5xl font-semibold text-red-600"
          data-testid="wilks-output"
        >
          {wilks}
        </span>
      </div>
    </div>
  );
};
