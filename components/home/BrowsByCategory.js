import BottomCategory from "./BottomCategory";
import Link from "next/link";
import Titles from "./simplecomponents/Titles";
import OtherCate from "./../../public/static/images/categories/more.png";
import Cookies from "js-cookie";

function BrowsByCategory({ props }) {
  const setCookies = (id) => {
    Cookies.set("searchedCategory", id);
  };
  return (
    <div className="w-full flex  justify-center flex-col items-center ">
      <Titles title={"Browse Businesses by Category"} />
      <div className="max-w-6xl  w-9/12 grid  mt-7 grid-flow-row grid-cols-4 ">
        {props.data.map((res) => (
          <Link
            key={res.id}
            href={{
              pathname: "/search",
              query: {
                id: res.id,
                title: res.name,
              },
            }}
            as={`search search?cflt=${res.name}&find_loc=${Cookies.get(
              "location_name"
            )}&log=${Cookies.get("location_log")}&lat=${Cookies.get(
              "location_lat"
            )}`}
          >
            <a onClick={setCookies(res.id)}>
              <BottomCategory img={res.image} name={res.name} />
            </a>
          </Link>
        ))}
        <BottomCategory img={OtherCate} name="Other Categories" />
      </div>
    </div>
  );
}
export default BrowsByCategory;
