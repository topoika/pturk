import Titles from "./simplecomponents/Titles";
import Apple from "./../../public/static/images/categories/apple.png";
import Android from "./../../public/static/images/categories/android.png";
import Image from "next/image";
import PturkForMobileItem from "./PturkForMobileItem";

function PturkForMobile() {
  return (
    <div className="w-full flex justify-center flex-col items-center pb-10">
      <Titles title={"Pturk Mobile Apps"} />
      <div className="max-w-6xl w-9/12 flex justify-between mt-7 ">
        <PturkForMobileItem img={Apple} text="iPhone, iPad and Watch" />
        <div className="w-14" />

        <PturkForMobileItem img={Android} text="Android" />
      </div>
    </div>
  );
}

export default PturkForMobile;
