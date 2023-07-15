"use client";

import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@components/ThemeProvider";
import { persistor, store } from "@lib/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={undefined}
        persistor={persistor}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {props.children}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
