/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import * as React from "react";
import ProfileTheme from "../components/theme/theme";
import NProgress from "nprogress";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";

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

  return (
    <ThemeProvider theme={ProfileTheme}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}>
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
