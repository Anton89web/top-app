import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
    <title> MyTop </title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Noto+Sans:wght@300;400;500;700&family=Open+Sans&display=swap"
          rel="stylesheet"/>
  <Component {...pageProps} />
  </Head>
  </>

}
