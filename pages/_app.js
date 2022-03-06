import "antd/dist/antd.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>User Registry AppHolder</title>
      </Head>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

export default App;
