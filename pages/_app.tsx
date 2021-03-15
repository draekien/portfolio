/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import ProfileTheme from "../components/theme/theme";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={ProfileTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
