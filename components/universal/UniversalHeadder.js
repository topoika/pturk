import Image from "next/image";
import logo from "./../../public/static/images/logo.png";
import { SearchIcon, ArrowSmDownIcon } from "@heroicons/react/solid";
import TopMenuItem from "../home/TopMenuItem";
import Link from "next/link";
import { route } from "next/dist/server/router";
import UniversalHeaderMenuItem from "../home/simplecomponents/UniversalHeaderMenuItem";

function UniversalHeadder({ props }) {
  return (
    <div className="flex flex-col fixed w-full  bg-white z-10 h-fit border-b-[1px] px-10 py-5">
      <div className="flex justify-between items-center ">
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
          <div className="flex shadow-slate-400 shadow rounded-md w-full">
            <div className="flex justify-center items-center content-center  bg-white p-2  rounded-l-md flex-grow ">
              <input
                type="text"
                name="dssds"
                id="category"
                value={props.searchName}
                placeholder="Nail salons, Plumbers, Takeout..."
                className="mt-1 ml-2 block w-full shadow-sm  text-black font-normal focus:outline-none focus:bg-transparent"
              />
              <div className=" border-r-2 border-b-slate-900 mx-5" />
              <input
                type="text"
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
        <div className="flex justify-center items-center">
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
          <Link href={"/login"}>
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
