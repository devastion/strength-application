import { Provider } from "react-redux";
import { store } from "@root/lib/redux/store";
import { fireEvent, render, screen } from "@testing-library/react";

import { Settings } from "./Settings";

describe("Settings.tsx", () => {
  test("settings dialog should be hidden initially", () => {
    render(
      <Provider store={store}>
        <Settings />
      </Provider>
    );
    const queryDialog = screen.queryByTestId("settings-dialog");

    expect(queryDialog).not.toBeInTheDocument();
  });

  test("settings dialog should be visible when button is clicked", () => {
    render(
      <Provider store={store}>
        <Settings />
      </Provider>
    );

    const queryDialog = screen.queryByTestId("settings-dialog");

    expect(queryDialog).not.toBeInTheDocument();

    const button = screen.getByTestId("settings-icon");
    fireEvent.click(button);
    expect(screen.getByTestId("settings-dialog")).toBeInTheDocument();
  });
});
