import { createRoot } from "react-dom/client";
import Header from "./Header";
import Main from "./Main";
import Details from "./Details";
import Infinite from "./Infinite";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen text-white">
          <Header />
          <Routes>
            <Route path="/pokedex-app/" element={<Infinite />} />
            <Route path="/pokedex-app/infinite" element={<Main />} />
            <Route path="/pokedex-app/details/:id" element={<Details />} />
            <Route path="/pokedex-app/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
