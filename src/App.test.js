import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello message", () => {
  render(<App />);
  const element = screen.getByText(/Hello Pre-Commit Hook 🚀/i);
  expect(element).toBeInTheDocument();
});

// ❌ This test is intentionally failing so you can test the hook
test("this test should fail", () => {
  expect(2 + 2).toBe(5);
});
