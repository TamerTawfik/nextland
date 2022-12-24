import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const critical = extractCritical(initialProps.html)
        initialProps.html = critical.html
        initialProps.styles = (
            <>
                {initialProps.styles}
                <style
                    data-emotion-css={critical.ids.join(' ')}
                    dangerouslySetInnerHTML={{ __html: critical.css }}
                />
            </>
        )

        return initialProps
    }

    render() {
        return (
<<<<<<< HEAD
            <Html lang="en" className="scroll-smooth scroll-pt-32">
=======
            <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
>>>>>>> 98fc21ae46b76d2e012fd7f55cd0a9b8073b3bb1
                <Head>
                    <style
                        data-emotion-css={this.props.ids?.join(' ')}
                        dangerouslySetInnerHTML={{ __html: this.props.css }}
                    />
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                </Head>
                <body className="scrollbar scrollbar-thumb-accents_4 scrollbar-track-accents_3 font-sans bg-background">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};