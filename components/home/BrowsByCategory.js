import BottomCategory from "./BottomCategory";
import Link from "next/link";
import Titles from "./simplecomponents/Titles";
import OtherCate from "./../../public/static/images/categories/more.png";

function BrowsByCategory({ props }) {
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
            as={`search`}
          >
            <a>
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
