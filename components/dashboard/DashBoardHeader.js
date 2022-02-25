import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { PlusIcon, PhoneIcon } from "@heroicons/react/solid";
import { useState } from "react";

function DashBoardHeader() {
  const useAuth = useSelector((state) => state.userReducer.user);
  const user = JSON.stringify(useAuth.user);
  var [dropDown, setDropDown] = useState(false);
  function setDropDownClick(params) {
    setDropDown((dropDown) => (dropDown = !dropDown));
  }
  console.log(user);
  return (
    <div className="flex  bg-[#E00707] justify-center items-center py-2 ">
      <div className="max-w-6xl w-9/12 h-4/5">
        <Link href={"/"}>
          <a>
            <Image
              src={
                "https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop_white.yji-2d2a7a4342fcfc9007c4020b1f76558a.svg"
              }
              alt="Pturk Logo"
              width="85"
              height="50"
              className="align-center"
            />
          </a>
        </Link>
      </div>
      <div className=" flex items-center justify-center">
        <Link href={"/"}>
          <a>
            <div className="flex items-center mx-3 group hover:animate-pulse cursor-pointer">
              <PlusIcon className="text-white h-5 w-5 mx-1 group-hover:text-gray-200" />
              <p className="text-white text-[13px] font-semibold group-hover:text-gray-200">
                ADD LISTING
              </p>
            </div>
          </a>
        </Link>
        <div className="bg-black w-[2px] h-[20px]" />
        <Link href={"/"}>
          <a>
            <div className="flex items-center mx-3 group hover:animate-pulse cursor-pointer">
              <PhoneIcon className="text-white h-5 w-5 mx-1 group-hover:text-gray-200" />
              <p className="text-white text-[13px] font-semibold group-hover:text-gray-200">
                CALL SUPPORT
              </p>
            </div>
          </a>
        </Link>
        <div className="bg-black w-[2px] h-[20px]" />
        <Link href={"/"}>
          <a>
            <div className="flex items-center mx-3 group hover:animate-pulse cursor-pointer">
              <p className="text-gray-800 text-[13px] font-semibold group-hover:text-gray-200">
                TOPOIKA TAMPUL
              </p>
            </div>
          </a>
        </Link>
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
            className={dropDown == true ? "z-10 absolute" : "-z-10 absolute"}
          >
            <div
              className="origin-top-right right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link href={"/login"}>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                  role="menuitem"
                  id="user-menu-item-1"
                  tabIndex="-1"
                >
                  Settings
                </a>
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300"
                role="menuitem"
                id="user-menu-item-2"
                tabIndex="-1"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
