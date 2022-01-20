import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fontsource/inter';
import { SessionProvider } from 'next-auth/react'

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider
      session={pageProps.session} >
      <Component {...pageProps} />
    </SessionProvider>
  )
}