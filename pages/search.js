import Filters from "../components/search/Filters";
import Results from "../components/search/Results";
import UniversalHeadder from "../components/universal/UniversalHeadder";
import Constants from "./../components/constant";
import Cookies from "js-cookie";
import MyMap from "../components/search/Map";
import Footer from "../components/home/Footer";

export default function Search(props) {
  return (
    <div className="bg-white ">
      <UniversalHeadder props={{ searchName: "Restaurants" }} />
      <div className="flex justify-between relative top-[14vh]">
        <div className="w-3/12 flex flex-col">
          <Filters />
        </div>
        <div className="w-full py-5 pr-8 pl-5  flex flex-col touch-pan-y">
          <Results data={props.listings} />
        </div>
        <div className="w-8/12 flex flex-col">
          <MyMap data={props.listings.data} />
        </div>
      </div>
      <div className="mt-32 bg-gray-300 flex justify-center relative  bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(Cookies.get("searchedCategory"));
  let subcategories = await fetch(
    Constants.BASE_URL +
      `/subcategories/${
        context.query.id ? context.query.id : Cookies.get("searchedCategory")
      }`
  ).then((res) => res.json());
  let listings = await fetch(
    Constants.BASE_URL +
      `/listings/${
        context.query.id ? context.query.id : Cookies.get("searchedCategory")
      }`
  ).then((res) => res.json());
  return {
    props: {
      subcategories: subcategories,
      listings: listings,
    },
  };
}
