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
import { useSelector } from "react-redux";
import { useState, setstate } from "react";

function Header() {
  const useAuth = useSelector((state) => state.userReducer.user);
  var [dropDown, setDropDown] = useState(false);
  function setDropDownClick(params) {
    setDropDown((dropDown) => (dropDown = !dropDown));
  }
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
          {!useAuth.session ? (
            <Link href={"/login"}>
              <a>
                <TopMenuItem text={"Login"} />
              </a>
            </Link>
          ) : (
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="true"
                  aria-haspopup="false"
                  onClick={setDropDownClick}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    height="32"
                    width="32"
                    objectFit="fit"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile Image"
                  />
                </button>
              </div>
              <div
                className={
                  dropDown == true ? "z-10 absolute" : "-z-10 absolute"
                }
              >
                <div
                  className="origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link href={"/user/profile"}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-0"
                      tabIndex="-1"
                    >
                      Your Profile
                    </a>
                  </Link>

                  <Link href={"/login"}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-1"
                      tabIndex="-1"
                    >
                      Settings
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-2"
                    tabIndex="-1"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          )}
          <Link href={"/signup"}>
            <a>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border text-white border-white ml-3  px-6 py-2 bg-transparent text-base font-bold cursor-pointer  hover:bg-gray-50 hover:text-gray-900"
              >
                {useAuth.session ? "Add Listing " : "Sign Up"}
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
