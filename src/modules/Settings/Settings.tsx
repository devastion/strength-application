"use client";
import React from "react";
import { FiSettings } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import { useTheme } from "next-themes";

import { SelectButton } from "./components/SelectButton/SelectButton";

const themeItems = [
  { name: "Light Theme", value: "light" },
  { name: "Dark Theme", value: "dark" },
];

export const Settings = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = React.useState(
    theme || systemTheme || "light"
  );

  React.useEffect(() => {
    setTheme(themeValue);
  }, [setTheme, themeValue]);

  return (
    <Dialog>
      <DialogTrigger>
        <FiSettings className="absolute right-0 top-6 h-6 w-6 opacity-50 hover:opacity-100" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="uppercase ">Settings</DialogTitle>
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
      </DialogContent>
    </Dialog>
  );
};
