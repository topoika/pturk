import Image from "next/image";
import Plumbers from "./../../public/static/images/menu/plm.svg";
function HeaderCategoriesItem({ text }) {
  return (
    <div className="flex">
      <Image
        src={Plumbers}
        alt={text}
        height="20"
        width="20"
        color="white"
        className="fill-white stroke-white "
      />

      <p className="text-s font-bold px-5 pl-1.5 cursor-pointer  hover:animate-pulse">
        {text}
      </p>
    </div>
  );
}

export default HeaderCategoriesItem;
