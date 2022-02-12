import BottomCategory from "./BottomCategory";
import Titles from "./simplecomponents/Titles";
import Restaurants from "./../../public/static/images/categories/rest.png";
import Shopping from "./../../public/static/images/categories/shopping.png";
import NightLife from "./../../public/static/images/categories/nightlife.png";
import ActiveLife from "./../../public/static/images/categories/active.png";
import BeautySpas from "./../../public/static/images/categories/beauty.png";
import Automotive from "./../../public/static/images/categories/auto.png";
import HomeService from "./../../public/static/images/categories/home.png";
import OtherCate from "./../../public/static/images/categories/more.png";

function BrowsByCategory({ props }) {
  return (
    <div className="w-full flex  justify-center flex-col items-center ">
      <Titles title={"Browse Businesses by Category"} />
      <div className="max-w-6xl  w-9/12 grid  mt-7 grid-flow-row grid-cols-4 ">
        {props.data.map((res) => (
          <BottomCategory key={res.id} img={res.image} name={res.name} />
        ))}
        <BottomCategory img={OtherCate} name="Other Categories" />
      </div>
    </div>
  );
}
export default BrowsByCategory;
