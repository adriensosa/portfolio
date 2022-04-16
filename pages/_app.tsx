import "../styles/globals.css";
import "../lib/locomotiv-scroll/locomotiv-scroll.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
