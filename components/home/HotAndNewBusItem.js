import Image from "next/image";
import Rating from "../universal/Rating";

function HotAndNewBusItem({ name, img, reviews, cost, city, country, open }) {
  return (
    <div className="flex flex-col border pb-2 rounded-md group shadow-main-box-shadow group cursor-pointer hover:shadow-2xl">
      <Image src={img} alt={name} width="350" height="200" />
      <div className="px-2 py-2">
        <p className="text-xl font-bold text-[#0073bb]  ">{name}</p>
        <div className="flex items-baseline  pt-1">
          <Rating rat={4} small={true} />
          <p className="ml-2 text-lg font-normal text-black opacity-70 ">
            {reviews} Reviews
          </p>
        </div>
        <p className="text-md font-normal text-black">
          {cost} • Chicken Shop, Ramen
        </p>
        <p className="text-md font-normal text-black">
          {city} {country}
        </p>
        <p className="text-md font-normal  text-[#E87B17]">🔥 Opened {open}</p>
      </div>
    </div>
  );
}

export default HotAndNewBusItem;
