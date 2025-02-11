import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import InputView from "./views/InputView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InputView />
    </QueryClientProvider>
  );
}

export default App;
