import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import NotFound from "@/pages/not-found";

import { HomeDesktop } from "@/pages/HomeDesktop";
import { ProductPage } from "@/pages/ProductPage";
import { PricingPage } from "@/pages/PricingPage";
import { BookDemoPage } from "@/pages/BookDemoPage";
import { TestPage } from "@/pages/TestPage";
// import { debugFonts } from "@/utils/font-debugger"; // Temporarily disabled

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        {/* Add pages below */}
        <Route path="/">
          <PageTransition>
            <HomeDesktop />
          </PageTransition>
        </Route>
        <Route path="/product">
          <PageTransition>
            <ProductPage />
          </PageTransition>
        </Route>
        <Route path="/pricing">
          <PageTransition>
            <PricingPage />
          </PageTransition>
        </Route>
        <Route path="/book-demo">
          <PageTransition>
            <BookDemoPage />
          </PageTransition>
        </Route>
        <Route path="/test">
          <PageTransition>
            <TestPage />
          </PageTransition>
        </Route>
        {/* Fallback to 404 */}
        <Route>
          <PageTransition>
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
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
