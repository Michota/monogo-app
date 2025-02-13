import { getSentimentAnalysis } from "@/services/getSentimentAnalysis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

/**
 * Custom hook for performing sentiment analysis using the Hugging Face API.
 *
 * This hook manages the sentiment text input, triggers a sentiment analysis request,
 * and provides the result along with the loading, success, and error states.
 * It uses React Query to manage the API request, and enables a manual refetch of the sentiment analysis.
 *
 * @returns {Object} The hook returns an object with the following properties:
 *   - `analysisResult` (any): The result of the sentiment analysis, which may be undefined if the request has not completed or failed.
 *   - `setSentiment` (function): A function to update the sentiment text input.
 *   - `analyze` (function): A function to manually trigger the sentiment analysis refetch.
 *   - `statuses` (object): An object containing the current state of the sentiment analysis request:
 *     - `isSuccess` (boolean): Indicates if the sentiment analysis was successful.
 *     - `isError` (boolean): Indicates if there was an error in the request.
 *     - `isLoading` (boolean): Indicates if the request is currently in progress.
 *   - `error` (any): The error object returned by the query, if any, or `null` if no error occurred.
 *
 */
export const useSentimentAnalysis = () => {
  const [text, setText] = useState<string>("");

  // Not destructured to not lose reference
  const queryResult = useQuery({
    queryKey: ["sentiment", text],
    queryFn: () => getSentimentAnalysis(text),
    enabled: false,
  });

  const analyze = () => queryResult.refetch({ cancelRefetch: true });

  const statuses = {
    isSuccess: queryResult.isSuccess,
    isError: queryResult.isError,
    isLoading: queryResult.isFetching,
  };

  return {
    error: queryResult.error,

    /** A current state of text to be analyzed */
    text,

    /** Function to update the text. */
    setText,

    /** Function to manually trigger sentiment analysis. */
    analyze,

    /** The result of the sentiment analysis or `undefined` if not fetched. */
    analysisResult: queryResult.data,

    /** Flags indicating the current query state. */
    statuses,

    /** Error object if the request fails. */
    error: queryResult.error,
  };
};
