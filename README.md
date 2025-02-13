# Sentiment Analyzer

A frontend application built with React and TypeScript that allows users to input text, send it to the Hugging Face Sentiment Analysis API, and display the sentiment result (positive, neutral, negative) in a user-friendly interface.

## Prerequisites

Before running the app, make sure you have the following installed:

- [pnpm](https://pnpm.io/) — A fast and disk space efficient package manager
- A Hugging Face Token (for API requests)

## Setup

1. **Install pnpm**  
   If you haven’t already, install pnpm by following the instructions [here](https://pnpm.io/).

2. **Create `.env` file**  
   In the root directory of the project, create a `.env` file at the top level and add the following line:

   ```
   VITE_HUGGING_FACE_TOKEN=your_hugging_face_token
   ```

   - You can get your Hugging Face Token from your [Hugging Face settings page](https://huggingface.co/settings/tokens).
   - Replace `your_hugging_face_token` with the actual token.

3. **Install dependencies**  
   Run the following command in your terminal to install all necessary dependencies:

   ```bash
   pnpm install
   ```

4. **Start the app**  
   Once the dependencies are installed, you can run the app locally with:

   ```bash
   pnpm dev
   ```

   The app should now be running locally, typically accessible at `http://localhost:5173` (or wherever your Vite dev server is set up).

---

## Development Notes

- **Vite API Testing**:  
  I couldn't get Vite to test the API directly, so the app is set up to work with external API calls instead of being handled internally by Vite.
- **GraphQL**:  
  Although I considered using GraphQL, I didn't use it because I wasn't comfortable setting up a server for it within the scope of this project.

- **JEST vs Vitest**:  
  Initially, I tried using JEST for testing, but I spent over 4 hours trying to get it to work correctly with icons and API testing. Unfortunately, it didn’t work as expected, so I switched to **Vitest** which was a much smoother experience and worked better for this project.

- **CSS**:  
  I prefer using Tailwind CSS or (I remember when it was other way around :D) over CSS Modules for styling, as I find it more efficient. However, I followed the project requirements which suggested using plain CSS (and provided more points for it), so I’ve stuck with CSS for styling in this case.

- **Text Input**:  
  A React app that analyzes sentiment of user input using the Hugging Face Sentiment Analysis API and displays the result in a user-friendly interface.

- **Libraries**:  
  I realize I’ve included several libraries that might be overkill for a small project like this, but I wanted to demonstrate my familiarity with them.

- **Internationalization**:  
  While I considered using `react-i18next` for internationalization, I decided to skip it in order to avoid complicating the project further.

- **Error handling**:  
  I couldn't really force API to throw error at me, so I did not wasted time to implement toasts, neither simple text message to display error if API returns one. Sorry.
