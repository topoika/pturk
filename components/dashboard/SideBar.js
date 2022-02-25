import {
  UserCircleIcon,
  HeartIcon,
  MailIcon,
  StarIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import SideBarItems from "./Elements/SideBarItems";

function SideBar() {
  return (
    <div className="w-1/5 bg-red-500 py-3 h-[100vh]">
      <Link href={"/"}>
        <a>
          <SideBarItems
            text={"My Profile"}
            Icon={UserCircleIcon}
            active={true}
          />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems text={"Listings"} Icon={ViewListIcon} active={false} />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems text={"Saved"} Icon={HeartIcon} active={false} />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems text={"Inbox"} Icon={MailIcon} active={false} />
        </a>
      </Link>
      <Link href={"/"}>
        <a>
          <SideBarItems text={"Reviews"} Icon={StarIcon} active={false} />
        </a>
      </Link>
    </div>
  );
}

export default SideBar;
