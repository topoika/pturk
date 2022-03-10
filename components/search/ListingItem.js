import { ChatAltIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Rating from "../universal/Rating";
import Recent from "./../../public/static/images/ls.jpg";
import ItemAttributes from "./simpleComponents/ItemAttributes";

function ListingItem({ listing }) {
  const tags = ["American(New)", "Food Delivery Services", "Accai Bowls"];
  return (
    <div>
      <div className="flex justify-start p-4 border mb-7 shadow-md rounded-md border-opacity-40 w-full hover:shadow-2xl cursor-pointer">
        <div className="w-6/12 rounded-md bg-black relative">
          <Image
            src={listing.image}
            alt="New listing"
            layout="fill"
            className="object-fill rounded-md"
          />
        </div>
        <div className="flex flex-col pr-7 pl-5">
          <p className="text-black font-bold text-xl opacity-90 hover:underline">
            {listing.name}
          </p>
          <div className="flex my-1">
            {/* Reatings  */}
            <Rating rat={listing.rating} />
            <p className="text-base text-black ml-1">
              {listing.reviews_count} Reviews
            </p>
          </div>
          <div className="py-2 flex">
            {tags.map((tag) => (
              <p
                key={tag.key}
                className="text-[12px] h-fit mr-2 font-bold text-black opacity-75 bg-black rounded-md bg-opacity-10 text-center hover:bg-opacity-40 w-fit px-3 py-[2px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex justify-start items-center mt-2">
            {listing.ping_status == "open" ? (
              <p className="text-base text-green-900 font-bold">Open</p>
            ) : (
              <p className="text-base text-red-800 font-bold">Closed</p>
            )}
            <p className="text-base text-black ml-1">
              {listing.ping_status == "open" ? "now" : "until 11:59PM"}
            </p>
          </div>
          <div className="flex items-start my-3">
            <ChatAltIcon className="w-10 mr-1 opacity-70" />
            <p className="text-[15px] text-black opacity-70 line-clamp-3">
              {listing.short_desc.substring(145, 0)}...
              <span className="text-base text-[#0073bb] font-bold hover:underline">
                more
              </span>
            </p>
          </div>
          <div className="h-[1px] bg-black opacity-30 my-4" />
          <div className="flex">
            <ItemAttributes
              value={listing.outdoor_dining}
              text="Outdoor Dining"
            />
            <ItemAttributes value={listing.delivery} text="Deliver" />
            <ItemAttributes value={listing.takeout} text="Takeout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingItem;
