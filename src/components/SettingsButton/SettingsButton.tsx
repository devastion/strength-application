"use client";
import { FiSettings } from "react-icons/fi";
import { toggleOpen } from "@lib/redux/slices/settingsSlice";
import { useAppDispatch } from "@root/hooks";
export function SettingsButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleOpen())}
      type="button"
      className="fixed right-6 top-6"
    >
      <FiSettings className="h-6 w-6 opacity-50 hover:opacity-100" />
    </button>
  );
}
