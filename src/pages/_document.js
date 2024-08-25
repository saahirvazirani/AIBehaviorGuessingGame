// _document.js in the pages folder
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
