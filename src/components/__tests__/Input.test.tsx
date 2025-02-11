import { render, screen } from "@testing-library/react";
import Input from "../Input";

const TEST_TEXT = "Dawid Michota nadaje się do Monogo";
const TEST_LABEL = "test-input";

const setup = () => {
  const utils = render(<Input value={TEST_TEXT} aria-label={TEST_LABEL} />);
  const inputElement = screen.getByLabelText<HTMLInputElement>(TEST_LABEL);
  return {
    inputElement,
    ...utils,
  };
};

describe("render input", () => {
  test("render input with text", () => {
    const { inputElement } = setup();

    expect(inputElement.value).toEqual(TEST_TEXT);
  });
});
