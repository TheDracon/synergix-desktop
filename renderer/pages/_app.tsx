import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion'




function MyApp({ Component, pageProps, router }: AppProps) {
  
  return <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>;
}

export default MyApp