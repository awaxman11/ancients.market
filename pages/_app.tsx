import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #fff2d9;
            color: #4d382f;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>Ancient Adventurers</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ajwaxman" />
        <meta property="og:url" content="https://ancients.market" />
        <meta property="og:title" content="ancients.market" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Ancient Helms from the Loot project."
        />
        <meta property="og:image" content="https://ancients.market/ancients.png" />
      </Head>
    </>
  )
}

export default Robes
