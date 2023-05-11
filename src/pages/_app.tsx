import { useEffect } from "react";
import type { AppProps } from "next/app";

import Header from "@/components/header";

import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
