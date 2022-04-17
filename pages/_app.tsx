import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={asPath}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </div>
    </RLSProvider>
  );
}

export default MyApp;
