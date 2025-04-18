import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import How_it_works from "./pages/How_it_works"
import Index from "./pages/Index";
import Homepge  from "./pages/HomePge"
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import Features from "./pages/Feartures";
import  Resource  from "./pages/Resource";
import "./App.css";
import PricingPage from "./pages/Pricing";
import FeaturesPage from "./pages/Feartures";
import { AsyncResource } from "async_hooks";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepge/>}/>
          <Route path="/Getstart" element={<Index />} />
          <Route path="/howworks" element={<How_it_works/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/price" element={<Pricing/>}/>
          <Route path="/feartures" element={<Features/ >}/>
          <Route path="/reso" element={<Resource/>}/>
          <Route path="/con" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
