import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'

export default class MyDocument extends Document {
    static  async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render(): JSX.Element{
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Noto+Sans:wght@300;400;500;700&family=Open+Sans&display=swap"/>
                    {/*<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>*/}
                    <meta property="og:local" content="ru_RU"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

