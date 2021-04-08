/** @jsxImportSource theme-ui */
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class ProfileDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Fira+Code&display=swap"
            rel="stylesheet"
            integrity="sha256-gZbI4+wrLYCTHUHbSevc5Cb937hgztYDHphgjt5Rauw= sha384-sYrJJNij21redvh+GnbWykpTMerBpGdWJ5ZPF/yD8lr0FZjTDZ2xoATsTAyqhIEB sha512-I5G0wuTOBiyqImBG+4rPspK0A9ruasyBzzLc172bo8KGb5FOjJ4C6/OnecMQdIcPcEmWT0KUjLLrGG/6/QIm8g=="
            crossOrigin="anonymous"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:site_name" content="wpei" />
          <meta property="og:url" content="https://www.wpei.me" />
          <meta property="og:image" content="https://i.imgur.com/L4VIf86.png" />
          <meta property="og:title" content=".NET Developer | William Pei" />
          <meta property="og:description" content="The portfolio website for William Pei where he showcases personal projects." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wpei" />
          <meta name="twitter:creator" content="@draekien" />
          <meta name="twitter:title" content=".NET Developer | William Pei" />
          <meta name="twitter:description" content="The portfolio website for William Pei where he showcases personal projects." />
          <meta name="twitter:image" content="https://i.imgur.com/L4VIf86.png" />
          <meta name="twitter:image:alt" content="A preview of the landing page of the wpei website." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ProfileDocument;
