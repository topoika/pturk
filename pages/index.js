import Head from "next/head";
import BrowsByCategory from "../components/home/BrowsByCategory";
import FindBestBus from "../components/home/FindBestBus";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HotAndNewBus from "../components/home/HotAndNewBus";
import PturkForMobile from "../components/home/PturkForMobile";
import RecentCollection from "../components/home/RecentCollection";
import Constants from "./../components/constant";
import { login } from "../redux/slices/userSlice";
import nookies from "nookies";
import { useDispatch } from "react-redux";

export default function Home(props) {
  const dispatch = useDispatch();
  console.log(props.user);
  dispatch(login(props.user[0]));

  return (
    <div>
      <Head>
        <title>Plumbing Turkey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="justify-center h-fit pb-36 bg-center bg-[url('./../public/static/images/bg.jpg')]   flex ">
        <Header />
      </div>
      <div className=" h-fit bg-[#F5F5F5] flex  py-9 justify-center">
        <FindBestBus props={props.randomsubcategories} />
      </div>
      <div className="bg-white  py-9 flex justify-center">
        <HotAndNewBus />
      </div>
      <div className="bg-white  py-9 flex justify-center">
        <RecentCollection />
      </div>
      <div className=" h-fit bg-[#F5F5F5] flex  py-9 justify-center">
        <BrowsByCategory props={props.homecategories} />
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

export async function getServerSideProps(context) {
  const cookie = nookies.get(context);
  let token = JSON.stringify(cookie["session_token"]);
  console.log(token);
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", token: token },
  };
  var currentUser = await fetch(
    Constants.BASE_URL + "/getuserinfo",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => data.user);
  var featured_categories = await fetch(
    Constants.BASE_URL + "/featuredcategories"
  ).then((res) => res.json());
  var random_sub_categories = await fetch(
    Constants.BASE_URL + "/randomsubcategories"
  ).then((res) => res.json());
  var randomBackground = await fetch(Constants.BASE_URL + "/background").then(
    (res) => res.json()
  );
  return {
    props: {
      homecategories: featured_categories,
      randomsubcategories: random_sub_categories,
      user: currentUser,
      background: randomBackground,
    },
  };
}
