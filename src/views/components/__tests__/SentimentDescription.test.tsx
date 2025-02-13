import { SentimentAnalysis } from "@/types/sentiment";
import { createSentimentDescription } from "@/utils/createSentimentDescription";
import { render, screen } from "@testing-library/react";
import SentimentDescription from "../SentimentDescription";

const mockData: SentimentAnalysis = {
  label: "NEGATIVE",
  score: 0.8,
};

describe("Render component", () => {
  test("Render description", () => {
    render(<SentimentDescription data={mockData} />);
    const descriptionElement = screen.getByText(createSentimentDescription(mockData.label, true));
    expect(descriptionElement).toBeInTheDocument();
  });

  test("Render icon", () => {
    render(<SentimentDescription data={mockData} />);
    const iconElement = screen.getByTestId("sentiment-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
