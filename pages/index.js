import Head from "next/head";
import BrowsByCategory from "../components/home/BrowsByCategory";
import FindBestBus from "../components/home/FindBestBus";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HotAndNewBus from "../components/home/HotAndNewBus";
import PturkForMobile from "../components/home/PturkForMobile";
import RecentCollection from "../components/home/RecentCollection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Plumbing Turkey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="justify-center h-fit pb-36 bg-slate-500 flex">
        <Header />
      </div>
      <div className=" h-fit bg-gray-300 flex  py-9 justify-center">
        <FindBestBus />
      </div>
      <div className="bg-white  py-9 flex justify-center">
        <HotAndNewBus />
      </div>
      <div className="bg-white  py-9 flex justify-center">
        <RecentCollection />
      </div>
      <div className=" h-fit bg-gray-300 flex  py-9 justify-center">
        <BrowsByCategory />
      </div>
      <div className="bg-white  py-9 flex justify-center">
        <PturkForMobile />
      </div>
      <div className=" h-fit bg-gray-300 flex  py-9 justify-center">
        <Footer />
      </div>
    </div>
  );
}
