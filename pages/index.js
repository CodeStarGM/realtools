import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Buy from "../components/Home/Buy";
import Contact from "../components/Home/Contact";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import Learn from "../components/Home/Learn";
import Listing from "../components/Home/Listing";
import Sell from "../components/Home/Sell";

export default function Home() {
  return (
    <>
      <Head>
        <title>Realtools</title>
        <meta
          name="description"
          content="The Best Real State Company Out There"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Featured />
      <Listing />
      <Sell />
      <Buy />
      <Learn />
      <Contact />
      <Footer />
    </>
  );
}
