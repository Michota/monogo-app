import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import SentimentForm from "../SentimentForm";

describe("SentimentForm", () => {
  it("renders the input and button correctly", () => {
    render(
      <SentimentForm isAnalysisResultLoading={false} defaultText="" setText={vi.fn()} onInitializeAnalysis={vi.fn()} />,
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText(/Analizuj/)).toBeInTheDocument();
  });

  it("submits the form when the input is valid", async () => {
    const mockOnInitializeAnalysis = vi.fn();
    const mockSetText = vi.fn();

    render(
      <SentimentForm
        isAnalysisResultLoading={false}
        defaultText=""
        setText={mockSetText}
        onInitializeAnalysis={mockOnInitializeAnalysis}
      />,
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "This is a test." } });
    const submitButton = screen.getByText(/Analizuj/);
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockOnInitializeAnalysis).toHaveBeenCalled());
    expect(mockSetText).toHaveBeenCalledWith("This is a test.");
  });

  it("shows validation error when input is invalid", async () => {
    const mockOnInitializeAnalysis = vi.fn();
    const mockSetText = vi.fn();

    render(
      <SentimentForm
        isAnalysisResultLoading={false}
        defaultText=""
        setText={mockSetText}
        onInitializeAnalysis={mockOnInitializeAnalysis}
      />,
    );

    const submitButton = screen.getByText(/Analizuj/);
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByTestId("errorMessage");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Pole nie może być puste");
  });

  it("disables the input and shows loading button when isAnalysisResultLoading is true", async () => {
    const mockOnInitializeAnalysis = vi.fn();
    const mockSetText = vi.fn();

    render(
      <SentimentForm
        isAnalysisResultLoading={true}
        defaultText=""
        setText={mockSetText}
        onInitializeAnalysis={mockOnInitializeAnalysis}
      />,
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const submitButton = screen.getByText(/Analizuj/);
    expect(submitButton).toBeDisabled();
  });
});
