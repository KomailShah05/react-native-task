import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render", async () => {
  render(<App />);

  screen.getByText("React Native App");
});
