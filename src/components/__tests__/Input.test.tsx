import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";
import { createStringWithCertainLength, randomWordsString } from "@/utils/testsUtils/stringGenerators";

const TEST_TEXT = "Dawid Michota nadaje się do Monogo";
const TEST_LABEL = "test-input";
const TEST_VALUE_MAX_LENGTH = 500;

const setup = () => {
  const utils = render(<Input defaultValue={TEST_TEXT} aria-label={TEST_LABEL} maxLength={TEST_VALUE_MAX_LENGTH} />);
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

  test(`Max length test: ensure input value is not longer than ${TEST_VALUE_MAX_LENGTH} characters`, () => {
    const { inputElement } = renderedInstance;

    const tooLongText = createStringWithCertainLength(TEST_VALUE_MAX_LENGTH + 10);

    fireEvent.input(inputElement, { target: { value: tooLongText } });
    expect(tooLongText.length).toBeGreaterThan(TEST_VALUE_MAX_LENGTH);
    expect(inputElement.value.length).toEqual(TEST_VALUE_MAX_LENGTH);
  });
});
