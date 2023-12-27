import { Provider } from "react-redux";
import { store } from "@root/lib/redux/store";
import { fireEvent, render, screen } from "@testing-library/react";

import { Wilks } from "./Wilks";
describe("OneRepMax.tsx", () => {
  test("Brzycki's formula", () => {
    render(
      <Provider store={store}>
        <Wilks />
      </Provider>
    );

    const bw = screen.getByTestId("bodyweight-input");
    const total = screen.getByTestId("total-input");
    const output = screen.getByTestId("wilks-output");

    fireEvent.change(bw, { target: { value: "89.9" } });
    fireEvent.change(total, { target: { value: "1022.5" } });
    expect(output.innerHTML).toEqual(`653.13`);
  });
});
