/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import * as React from "react";
import ProfileTheme from "../components/theme/theme";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { motion } from "framer-motion";
import * as gtag from "../lib/gtag";
import ReactTooltip from "react-tooltip";
import { ThemeColors } from "../components/theme/theme.colors";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleComplete = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={ProfileTheme}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}>
        <Component {...pageProps} />
      </motion.div>
      <ReactTooltip backgroundColor={ThemeColors["b-400"]} textColor={ThemeColors.secondary} />
    </ThemeProvider>
  );
};

export default App;
