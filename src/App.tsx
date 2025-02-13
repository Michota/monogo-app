import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InputView from "./views/InputView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ width: "100dvw", height: "100dvh" }}>
        <InputView />
      </div>
    </QueryClientProvider>
  );
}

export default App;
