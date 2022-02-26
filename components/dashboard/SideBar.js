import {
  UserCircleIcon,
  HeartIcon,
  MailIcon,
  StarIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import SideBarItems from "./Elements/SideBarItems";
import { useState } from "react";

function SideBar() {
  const [activeItem, setActive] = useState("myProfile");
  function setActiveItem(active) {
    setActive((activeItem) => (activeItem = active));
  }
  return (
    <div className="w-1/5 bg-[#E00707] py-3 h-[100] sticky">
      <Link href={"/user/profile"}>
        <a>
          <SideBarItems
            text={"My Profile"}
            Icon={UserCircleIcon}
            active={activeItem == "myProfile" ? true : false}
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems
            text={"Listings"}
            Icon={ViewListIcon}
            active={activeItem == "listings" ? true : false}
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems
            text={"Saved"}
            Icon={HeartIcon}
            active={activeItem == "saved" ? true : false}
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems
            text={"Inbox"}
            Icon={MailIcon}
            active={activeItem == "inbox" ? true : false}
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems
            text={"Reviews"}
            Icon={StarIcon}
            active={activeItem == "reviews" ? true : false}
          />
        </a>
      </Link>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context.query);
}
export default SideBar;
