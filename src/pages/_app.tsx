import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CursorLight from "../../components/CursorLight";
import { Toaster } from "@/components/ui/sonner";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <CursorLight />
     <Component {...pageProps} />
     <Toaster />
  </>
);
}
