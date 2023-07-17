"use client";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import {
  selectFormulaState,
  setFormulaState,
} from "@lib/redux/slices/formulaSlice";
import { selectUnitsState, setUnitState } from "@lib/redux/slices/unitsSlice";
import { useAppDispatch, useAppSelector } from "@root/hooks";
import { useTheme } from "next-themes";

import { SelectButton } from "./components/SelectButton/SelectButton";

const themeItems = [
  { name: "Light Theme", value: "light" },
  { name: "Dark Theme", value: "dark" },
];

const unitItems = [
  { name: "Kilograms", value: "kilograms" },
  { name: "Pounds", value: "pounds" },
];

const formulasItems = [
  { name: "Brzycki's formula", value: "weight * (36 / (37 - reps))" },
  {
    name: "Epley's formula",
    value: "weight * (1 + 0.0333 * reps)",
  },
];

export const Settings = () => {
  const dispatch = useAppDispatch();

  const { theme, systemTheme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = React.useState(
    theme || systemTheme || "light"
  );

  const selectedUnits = useAppSelector(selectUnitsState);
  const [units, setUnits] = React.useState(selectedUnits);

  const selectedFormulaState = useAppSelector(selectFormulaState);
  const [formula, setFormula] = React.useState(selectedFormulaState);

  React.useEffect(() => {
    dispatch(setUnitState(units));
  }, [dispatch, units]);

  React.useEffect(() => {
    setTheme(themeValue);
  }, [setTheme, themeValue]);

  React.useEffect(() => {
    dispatch(setFormulaState(formula));
  }, [dispatch, formula]);

  return (
    <Dialog>
      <DialogTrigger>
        <FiSettings className="absolute right-0 top-6 h-6 w-6 opacity-50 hover:opacity-100" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="uppercase">Settings</DialogTitle>
          <DialogDescription className="text-start">
            Make changes to your settings here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <SelectButton
          label="Select Theme"
          placeholder="Select Theme"
          items={themeItems}
          value={themeValue}
          setValue={setThemeValue}
          heading="Select Theme"
        />
        <SelectButton
          label="Select Units"
          placeholder="Select Units"
          items={unitItems}
          value={units}
          setValue={setUnits}
          heading="Select Units"
        />
        <SelectButton
          label="Select Formula"
          placeholder="Select Formula"
          items={formulasItems}
          value={formula}
          setValue={setFormula}
          heading="Select Formula"
        />
        <Separator />
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto w-7/12 font-medium uppercase text-slate-900 dark:text-slate-100"
          >
            Close Settings
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};
