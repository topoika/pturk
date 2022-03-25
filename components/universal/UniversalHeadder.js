import Image from "next/image";
import logo from "./../../public/static/images/logo.svg";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import UniversalHeaderMenuItem from "../home/simplecomponents/UniversalHeaderMenuItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import Cookies from "js-cookie";

function UniversalHeadder({ props }) {
  const userAuth = useSelector((state) => state.userReducer.user);
  var [dropDown, setDropDown] = useState(false);
  function setDropDownClick(params) {
    setDropDown((dropDown) => (dropDown = !dropDown));
  }
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    Cookies.remove("session_token");
  }
  return (
    <div className="flex flex-col fixed w-full  bg-white z-[9] h-fit border-b-[1px] px-10 py-5">
      <div className="flex justify-between items-center relative ">
        <Link href={"/"}>
          <a>
            <Image
              src={logo}
              alt="Pturk Logo"
              width="85"
              height="50"
              className="align-center"
            />
          </a>
        </Link>
        <div className="flex flex-col justify-center flex-1 ml-72">
          <div className="flex shadow-slate-400 shadow-search-box rounded-md w-full">
            <div className="flex justify-center items-center content-center  bg-white p-2  rounded-l-md flex-grow ">
              <input
                type="text"
                name="dssds"
                id="category"
                defaultValue={props.searchName}
                placeholder="Nail salons, Plumbers, Takeout..."
                className="mt-1 ml-2 block w-full shadow-sm  text-black font-normal focus:outline-none focus:bg-transparent"
              />
              <div className=" h-full border-r-2 bg-black mx-5" />
              <input
                type="address"
                name="dssds"
                id="category"
                placeholder="Address, Neighborhood, City, State or Zip"
                className="mt-1  block w-full shadow-sm  text-black font-normal focus:outline-none"
              />
            </div>
            <div className="bg-[#E00707] justify-center h-full py-2 px-3 rounded-r-md">
              <SearchIcon className=" h-7 w-7 text-white justify-center " />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <button
            type="button"
            className="h-fit items-center rounded-md  text-black px-4 py-2 mr-2 ml-14 bg-white text-base font-semibold cursor-pointer hover:bg-opacity-10 hover:bg-black "
          >
            For Business
          </button>
          <button
            type="button"
            className="h-fit items-center rounded-md  text-black    px-3 py-2 mx-2 bg-white text-base font-semibold cursor-pointer hover:bg-opacity-10 hover:bg-black "
          >
            Write a Review
          </button>
          {userAuth.session ? (
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
                  className="relative origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                  <a
                    onClick={logoutUser}
                    className="cursor-pointer block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-2"
                    tabIndex="-1"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex">
              <Link href={"/login"}>
                <a>
                  <button
                    type="button"
                    className="h-fit items-center rounded-md border text-black opacity-80 border-black border-opacity-40  px-4 py-[7px] mx-2 bg-white text-base font-semibold cursor-pointer hover:bg-opacity-40 hover:bg-black "
                  >
                    Log In
                  </button>
                </a>
              </Link>
              <Link href={"/signup"}>
                <a>
                  <button
                    type="button"
                    className="h-fit items-center rounded-md border text-white border-white  px-4 py-[7px] mx-2 bg-[#E00707] text-base font-semibold cursor-pointer  "
                  >
                    Sign Up
                  </button>
                </a>
              </Link>
            </div>
          )}
          {userAuth.session ? (
            <Link href={"/user/add-listing"}>
              <a>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border text-black border-black ml-5  px-6 py-2 bg-transparent text-base font-bold cursor-pointer  hover:bg-gray-50 hover:text-gray-900"
                >
                  Add Listing
                </button>
              </a>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="w-[375px]" />
        <ul className="flex flex-1">
          <UniversalHeaderMenuItem text={"Restaurants"} />
          <UniversalHeaderMenuItem text={"Home Services"} />
          <UniversalHeaderMenuItem text={"Auto Services"} />
          <UniversalHeaderMenuItem text={"More"} />
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default UniversalHeadder;
