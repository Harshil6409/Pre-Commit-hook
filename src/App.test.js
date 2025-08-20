import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello message", () => {
  render(<App />);
  const element = screen.getByText(/Hello Pre-Commit Hook/i);
  expect(element).toBeInTheDocument();
});

test("this test should fail", () => {
  expect(2 + 2).toBe(4);
});