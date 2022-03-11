import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import Cookies from "js-cookie";
import Image from "next/image";
import UniversalHeadder from "../components/universal/UniversalHeadder";
import { useState } from "react";
import Title2 from "../components/universal/Title2";
import Rating from "../components/universal/Rating";

export default function ListingDetails(props) {
  const listing = props.listing.data[0];
  let images = listing.images.split(",");
  const [activeImages, setactiveImages] = useState(images.slice(0, 4));
  const [addedImage, setAddedImage] = useState(1);
  function increament() {
    if (addedImage + 4 < images.length) {
      console.log(addedImage);
      setactiveImages(() => images.slice(addedImage, addedImage + 4));
      setAddedImage(() => addedImage + 1);
      console.log(addedImage);
    }
  }
  function decrement() {
    if (addedImage > 0) {
      setAddedImage(() => addedImage - 1);
      console.log(addedImage);
      setactiveImages(() => images.slice(addedImage, addedImage + 4));
      console.log(addedImage);
    }
  }
  return (
    <div>
      <UniversalHeadder props={{ searchName: listing.name }} />
      <div className="flex justify-center items-center relative top-[14vh] flex-col">
        <div className="flex w-full justify-evenly relative  h-[40vh] overflow-hidden">
          {activeImages.map((_image) => (
            <div key={_image.index} className="w-full h-full relative">
              <Image
                src={_image}
                alt="New listing"
                layout="fill"
                quality="100"
              />
            </div>
          ))}
          <div className="h-full absolute bg-gradient-to-b from-transparent to-[#1C1713] w-full" />

          <div className="absolute right-0 top-1/2  rounded-2xl bg-slate-50 opacity-85 mr-2 ">
            <ChevronRightIcon
              onClick={increament}
              className={
                addedImage == images.length - 4
                  ? "h-6 text-black opacity-60 "
                  : "h-6 opacity-100 cursor-pointer"
              }
            />
          </div>
          <div className="absolute left-0 top-1/2  rounded-2xl bg-slate-50 opacity-85 ml-2 ">
            <ChevronLeftIcon
              onClick={decrement}
              className={
                addedImage == 0
                  ? "h-6 text-black opacity-60 "
                  : "h-6 opacity-100 cursor-pointer"
              }
            />
          </div>
        </div>
        <div className="flex flex-col h-fit bottom-0 mb-3  justify-center max-w-6xl w-9/12  bg-transparent absolute">
          <p className="text-[42px] text-white font-extrabold">
            {listing.name}
          </p>
          <div className="flex justify-start my-1 ">
            <Rating rat={listing.rating} small={false} />
            <p className="text-lg text-white font-semibold">
              {listing.reviews_count + " reviews"}
            </p>
          </div>
          <div className="flex justify-start py-1 items-center">
            <div className="rounded-2xl bg-blue-600 h-fit p-[2px] mr-1">
              <CheckIcon className="text-black h-4  " />
            </div>
            <p className="text-blue-600 font-semibold text-lg">Claimed</p>
            <p className="text-white font-semibold text-lg">
              {" • " + "$$$ " + " • " + " Restaurants and Food Palours"}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              {listing.ping_status == "open" ? (
                <p className=" text-green-900 font-semibold text-lg">Open</p>
              ) : (
                <p className=" text-red-800 font-semibold text-lg">Closed</p>
              )}
              <p className="text-white font-semibold text-lg ml-1">
                {listing.ping_status == "open" ? "now" : "10:00 AM - 9:00 PM"}
              </p>
              <InformationCircleIcon className="h-5 mx-1 stroke-blue-700 fill-transparent" />
              <p className="text-blue-700 font-semibold text-lg ml-1">
                Hours updated 1 month ago
              </p>
            </div>
            <div className="py-3 px-6 border border-white rounded-md cursor-pointer hover:bg-white hover:bg-opacity-25">
              <p className="text-white font-semibold text-lg">
                See {images.length} photoss
              </p>
            </div>
          </div>
        </div>
        <div className="h-[2000px] bg-black w-full absolute  top-[40vh]">
          <p>This is the body</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let listing = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/listing/${
        context.query.id ? context.query.id : Cookies.get("viewedId")
      }`
  ).then((res) => res.json());
  return {
    props: {
      listing: listing,
    },
  };
}
