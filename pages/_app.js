import Head from 'next/head';
import Header from '../components/Header';
import { Container } from "react-bootstrap";

import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <Header />
        <Container className="mt-5">
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )

}

export default MyApp
