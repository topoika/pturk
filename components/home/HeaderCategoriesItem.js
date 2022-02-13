import Image from "next/image";
import Plumbers from "./../../public/static/images/menu/one.svg";
function HeaderCategoriesItem({ text }) {
  return (
    <div className="flex">
      <Image
        src={Plumbers}
        alt={text}
        height="20"
        width="20"
        className="fill-white"
      />

      <p className="text-white text-s font-bold px-5 pl-1.5 cursor-pointer  hover:animate-pulse">
        {text}
      </p>
    </div>
  );
}

export default HeaderCategoriesItem;
