import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";
import { randomWordsString } from "@/utils/testsUtils/randomWordsString";

const TEST_TEXT = "Dawid Michota nadaje się do Monogo";
const TEST_LABEL = "test-input";

const setup = () => {
  const utils = render(<Input defaultValue={TEST_TEXT} aria-label={TEST_LABEL} />);
  const inputElement = screen.getByLabelText<HTMLInputElement>(TEST_LABEL);
  return {
    inputElement,
    ...utils,
  };
};

describe("render input", () => {
  let renderedInstance: ReturnType<typeof setup>;

  beforeEach(() => {
    renderedInstance = setup();
  });

  test("render input with text", () => {
    expect(renderedInstance.inputElement.value).toEqual(TEST_TEXT);
  });

  test("input value", () => {
    const { inputElement } = renderedInstance;
    const randomText = randomWordsString();

    fireEvent.change(inputElement, { target: { value: randomText } });
    expect(inputElement.value).toEqual(randomText);
  });
});
