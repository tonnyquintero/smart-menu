import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-white text-black dark:bg-black dark:text-white">
                    <Main />
                    <div id="modal" />
                    <div id="botones" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
