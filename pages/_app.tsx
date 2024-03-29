import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import router from "next/router";


export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
  <>
    <Head>
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
    </Head>
  <Component {...pageProps} />
  </>)
  
}
