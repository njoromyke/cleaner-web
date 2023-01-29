import { render, screen } from "@testing-library/react";
import App from "./App";

test("Has user", () => {
  render(<App />);
  expect(screen.getByText("User")).toBeInTheDocument();
});
