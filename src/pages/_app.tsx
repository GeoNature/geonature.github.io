import axios from "axios";
import { SWRConfig } from "swr";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import Header from "@/components/presentation/header";
import Footer from "@/components/presentation/footer";

import "@/styles/global.scss";

const SWR_CONFIG = {
  dedupingInterval: 24 * 60 * 60 * 1000,
  revalidateOnFocus: false,
  fetcher: (url: string) => axios.get(url).then((res) => res.data),
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <SWRConfig value={SWR_CONFIG}>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </SWRConfig>
  );
}
