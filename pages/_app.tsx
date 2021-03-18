/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import * as React from "react";
import ProfileTheme from "../components/theme/theme";
import Loading from "../components/loading/loading";
import NProgress from "nprogress";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setPageLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return <ThemeProvider theme={ProfileTheme}>{pageLoading ? <Loading /> : <Component {...pageProps} />}</ThemeProvider>;
};

export default App;
