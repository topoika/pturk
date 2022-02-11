import Image from "next/image";
import RecentImage from "./../../../public/static/images/recent.jpg";

function RecentCollectionItem({ name, author, places }) {
  return (
    <div>
      <div className="flex  mt-5">
        <Image
          src={RecentImage}
          height="100"
          width="100"
          alt="recent collection"
          className="rounded-md cursor-pointer"
        />
        <div className=" flex flex-col justify-between px-4 ">
          <p className="text-lg font-bold text-[#0073bb] hover:underline ">
            {name}
          </p>
          <div className="flex">
            <p className="text-lg font-normal text-gray-500">
              {places} Places • By
            </p>
            <p className="text-lg ml-2 font-normal text-[#0073bb]">{author}</p>
          </div>
        </div>
      </div>
      <div className=" max-w-full w-full h-px bg-slate-600 opacity-30 mt-5 -mb-px " />
    </div>
  );
}

export default RecentCollectionItem;
