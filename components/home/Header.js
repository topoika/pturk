import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import logo from "./../../public/static/images/logo.svg";
import { SearchIcon } from "@heroicons/react/solid";
import HeaderCategoriesItem from "./HeaderCategoriesItem";
import Link from "next/link";
import Plumbers from "./../../public/static/images/menu/one.svg";
import Restaurant from "./../../public/static/images/menu/two.svg";
import HomeServices from "./../../public/static/images/menu/home.svg";
import Delivery from "./../../public/static/images/menu/delivery.svg";
import Love from "./../../public/static/images/menu/love.svg";

function Header() {
  return (
    <div className=" max-w-6xl w-9/12 h-4/5  ">
      <div className="flex justify-between  pt-2 items-center content-center">
        <div className="flex">
          <TopMenuItem text={"Write a Review"} />
          <TopMenuItem text={"Events"} />
          <TopMenuItem text={"Talks"} />
          <TopMenuItem text={"Pturk for Business"} />
        </div>
        <div className="flex  items-center">
          <Link href={"/login"}>
            <a>
              <TopMenuItem text={"Login"} />
            </a>
          </Link>
          <Link href={"/signup"}>
            <a>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border text-white border-white ml-3  px-6 py-2 bg-transparent text-base font-bold cursor-pointer  hover:bg-gray-50 hover:text-gray-900"
              >
                Sign Up
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col justify-center pt-28 ">
        <Image
          src={logo}
          alt="Pturk Logo"
          width="150"
          height="100"
          className="align-center"
        />
        <div className="flex justify-center mt-12">
          <div className="flex justify-center flex-grow bg-white p-3  rounded-l-md ">
            <input
              type="text"
              name="dssds"
              id="category"
              placeholder="Nail salons, Plumbers, Takeout..."
              className="mt-1 ml-2 block w-full shadow-sm sm:text-xl text-black font-normal focus:outline-none"
            />
            <div className=" border-r-2 border-b-slate-900 mx-5" />
            <input
              type="text"
              name="dssds"
              id="category"
              placeholder="Address, Neighborhood, City, State or Zip"
              className="mt-1  block w-full shadow-sm sm:text-xl text-black font-normal focus:outline-none"
            />
          </div>
          <div className="bg-[#E00707] justify-center h-full py-3 px-7 rounded-r-md">
            <SearchIcon className=" h-8 w-8 text-white justify-center " />
          </div>
        </div>
        <div className="flex justify-center mt-5 mb-36 ">
          <HeaderCategoriesItem text={"Plumbers"} img={Plumbers} />
          <HeaderCategoriesItem text={"Restaurants"} img={Restaurant} />
          <HeaderCategoriesItem text={"Home Service"} img={HomeServices} />
          <HeaderCategoriesItem text={"Delivery"} img={Delivery} />
          <HeaderCategoriesItem text={"Black Owned"} img={Love} />
        </div>
      </div>
    </div>
  );
}

export default Header;
