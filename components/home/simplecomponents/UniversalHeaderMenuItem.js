import Image from "next/image";
import DropDownImage from "./../../../public/static/images/menu/arrow.svg";
function UniversalHeaderMenuItem({ text }) {
  return (
    <div className=" flex items-center group cursor-pointer mr-6">
      <p className="text-base font-semibold mr-[5px] ">{text}</p>
      <Image src={DropDownImage} alt={text} height="15" width="15" />
    </div>
  );
}

export default UniversalHeaderMenuItem;
