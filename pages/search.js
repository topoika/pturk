import Filters from "../components/search/Filters";
import Results from "../components/search/Results";
import UniversalHeadder from "../components/universal/UniversalHeadder";
import Constants from "./../components/constant";
import Cookies from "js-cookie";
import MyMap from "../components/search/Map";

export default function Search(props) {
  return (
    <div className="bg-white  ">
      <UniversalHeadder props={{ searchName: "Restaurants" }} />
      <div className="flex justify-between">
        <div className="w-2/6 flex flex-col">
          <Filters />
        </div>
        <div className="w-full py-5 pr-8 pl-5 flex flex-col">
          <Results />
        </div>
        <div className="w-9/12 flex flex-col">
          <MyMap />
        </div>
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
  return {
    props: {
      subcategories: subcategories,
    },
  };
}
