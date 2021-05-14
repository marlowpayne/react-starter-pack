import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hello from "./HelloContainer";

test("renders Hello text", () => {
  render(<Hello />);
  const helloText = screen.getByText(/Hello/i);
  expect(helloText).toBeInTheDocument();
});

test("renders Hello World! text by default", () => {
  render(<Hello />);
  const helloWorldText = screen.getByText(/Hello World!/i);
  expect(helloWorldText).toBeInTheDocument();
});

test("clicking the Update Name button does not update the text if the input is empty", () => {
  render(<Hello />);
  const updateNameButton = screen.getByText(/Update Name/i);
  userEvent.click(updateNameButton);

  const helloWorldText = screen.getByText(/Hello World!/i);
  expect(helloWorldText).toBeInTheDocument();
});

test("correctly updates name with a new name entered in the input", () => {
  render(<Hello />);
  const textInput = screen.getByPlaceholderText(/New name/i);
  userEvent.type(textInput, "Tom Tester");

  const updateNameButton = screen.getByText(/Update Name/i);
  userEvent.click(updateNameButton);

  const tomTesterText = screen.getByText(/Hello Tom Tester!/i);
  expect(tomTesterText).toBeInTheDocument();
});
