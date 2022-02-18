import Filters from "../components/search/Filters";
import Results from "../components/search/Results";
import Map from "../components/search/Map";
import UniversalHeadder from "../components/universal/UniversalHeadder";
import Constants from "./../components/constant";

export default function Search(props) {
  return (
    <div className="bg-white  ">
      <UniversalHeadder props={{ searchName: "Restaurants" }} />
      <div className="flex justify-between">
        <div className="bg-green-600 w-2/6 flex flex-col">
          <Filters />
        </div>
        <div className="bg-red-500  w-full  flex flex-col">
          <Results />
        </div>
        <div className="bg-yellow-600 w-9/12 flex flex-col">
          <Map />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let subcategories = await fetch(
    Constants.BASE_URL +
      `/subcategories/${context.query.id ? context.query.id : 1}`
  ).then((res) => res.json());
  return {
    props: {
      subcategories: subcategories,
    },
  };
}
