import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { HomeDesktop } from "@/pages/HomeDesktop";
import { TestPage } from "@/pages/TestPage";
// import { debugFonts } from "@/utils/font-debugger"; // Temporarily disabled

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomeDesktop} />
      <Route path="/test" component={TestPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
