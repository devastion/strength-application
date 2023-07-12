"use client";

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@components/ThemeProvider";
import { store } from "@lib/redux/store";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {props.children}
      </ThemeProvider>
    </Provider>
  );
};
