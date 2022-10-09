import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import * as React from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { motion } from 'framer-motion';
import * as gtag from '../lib/gtag';
import { Waystone } from '@waystone/components';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleComplete = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Waystone>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}>
        <Component {...pageProps} />
      </motion.div>
    </Waystone>
  );
};

export default App;
