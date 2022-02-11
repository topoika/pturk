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

function BrowsByCategory() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Titles title={"Browse Businesses by Category"} />
      <div className="max-w-6xl w-9/12 flex justify-between mt-7">
        <BottomCategory img={Restaurants} name="Restaurants" />
        <BottomCategory img={Shopping} name="Shopping" />
        <BottomCategory img={NightLife} name="NightLife" />
        <BottomCategory img={ActiveLife} name="Active Life" />
      </div>
      <div className="max-w-6xl w-9/12 flex justify-between">
        <BottomCategory img={BeautySpas} name="Beauty & Spas" />
        <BottomCategory img={Automotive} name="Automotive" />
        <BottomCategory img={HomeService} name="Home Services" />
        <BottomCategory img={OtherCate} name="Other Categories" />
      </div>
    </div>
  );
}
export default BrowsByCategory;
