import { Provider } from "react-redux";
import { store } from "@root/lib/redux/store";
import { fireEvent, render, screen } from "@testing-library/react";

import { OneRepMax } from "./OneRepMax";
describe("OneRepMax.tsx", () => {
  test("Brzycki's formula", () => {
    render(
      <Provider store={store}>
        <OneRepMax />
      </Provider>
    );

    const weight = screen.getByTestId("weight-input");
    const reps = screen.getByTestId("reps-input");
    const output = screen.getByTestId("1rm-output");

    fireEvent.change(weight, { target: { value: "100" } });
    fireEvent.change(reps, { target: { value: "15" } });
    expect(output.innerHTML).toEqual(`164KG`);
  });
});
