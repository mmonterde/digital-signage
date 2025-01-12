/**
 * Overloads the _document container from Next.js in order to add custom fonts
 */

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

class AppDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        const styles = flush()
        return { ...page, styleTags, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{'body { margin: 0 } /* custom! */'}</style>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta charSet='utf-8' />
                    <link
                        href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'
                        rel='stylesheet'
                    />
                    <script
                        src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.1/socket.io.js' />
                    <link
                        rel='apple-touch-icon' type='image/png'
                        sizes='76x76' href='/assets/apple-touch-icon.png' />
                    <link
                        rel='icon' type='image/png'
                        sizes='32x32' href='/assets/favicon-32x32.png' />
                    <link
                        rel='icon' type='image/png'
                        sizes='16x16' href='/assets/favicon-16x16.png' />
                    <link
                        rel='mask-icon' href='/assets/safari-pinned-tab.svg' color='#5bbad5' />
                    <meta name='msapplication-TileColor' content='#da532c' />
                    <meta name='theme-color' content='#ffffff'></meta>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default AppDocument
