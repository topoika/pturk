import Image from "next/image";
import Recent from "./../../public/static/images/ls.jpg";

function Results() {
  return (
    <div className="flex justify-start p-4 border rounded-sm border-opacity-40 w-full hover:shadow-md cursor-pointer">
      <div className="">
        <Image src={Recent} alt="New listing" />
      </div>
      <div>
        <p>Info here</p>
      </div>
    </div>
  );
}

export default Results;
