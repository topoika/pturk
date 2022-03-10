import { ChatAltIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Rating from "../universal/Rating";
import React, { useState } from "react";

import ItemAttributes from "./simpleComponents/ItemAttributes";

function ListingItem({ listing }) {
  const tags = ["American(New)", "Food Delivery Services", "Accai Bowls"];
  let images = listing.images.split(",");
  const [activeImage, setActiveImage] = useState(0);
  const [image, setimage] = useState(images[activeImage]);
  function increament() {
    if (activeImage < images.length - 1) {
      setActiveImage(() => activeImage + 1);
      setimage(() => images[activeImage]);
    }
  }
  function decrement() {
    if (activeImage > 0) {
      setActiveImage(() => activeImage - 1);
      setimage(() => images[activeImage]);
    }
  }
  return (
    <div>
      <div className="flex justify-start p-4 border mb-7 shadow-md rounded-md border-opacity-40 w-full hover:shadow-2xl cursor-pointer">
        <div className="w-6/12 rounded-md bg-black relative">
          <Image
            src={image}
            alt="New listing"
            layout="fill"
            className="object-fill rounded-md"
          />
          <div className="absolute left-0 top-1/2  rounded-2xl bg-slate-50 opacity-85 mr-[2px] ">
            <ChevronLeftIcon
              onClick={decrement}
              className={
                activeImage == 0
                  ? "h-6 text-black opacity-60 "
                  : "h-6 opacity-100 cursor-pointer"
              }
            />
          </div>
          <div className="absolute right-0 top-1/2  rounded-2xl bg-slate-50 opacity-85 mr-[2px] ">
            <ChevronRightIcon
              onClick={increament}
              className={
                activeImage == images.length - 1
                  ? "h-6 text-black opacity-60 "
                  : "h-6 opacity-100 cursor-pointer"
              }
            />
          </div>
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
