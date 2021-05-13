import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <Header></Header>
      </main>
    </>
  )

}

export default MyApp
