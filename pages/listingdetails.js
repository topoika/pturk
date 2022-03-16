import {
  ArchiveIcon,
  BookmarkIcon,
  CameraIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  InformationCircleIcon,
  ShareIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import Cookies from "js-cookie";
import Image from "next/image";
import UniversalHeadder from "../components/universal/UniversalHeadder";
import { useState } from "react";
import Title2 from "../components/universal/Title2";
import Rating from "../components/universal/Rating";
import Title3 from "../components/universal/Title3";
import TopButton from "../components/detailspage/TopButton";
import AmenitiesItem from "../components/detailspage/AmenitiesItem";
import ReviewItem from "../components/detailspage/ReviewItem";

export default function ListingDetails(props) {
  const listing = props.listing.data[0];
  let images = listing.images.split(",");
  const [activeImages, setactiveImages] = useState(images.slice(0, 4));
  const [amenities, setamenities] = useState([1, 2, 3, 4]);
  const [desc, setdesc] = useState(true);
  const [addedImage, setAddedImage] = useState(1);
  function toggleAmenities() {
    if (amenities.length == 4) {
      setamenities(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    } else {
      setamenities(() => [1, 2, 3, 4]);
    }
  }
  function toggleDesc() {
    if (desc) {
      setdesc(() => false);
    } else {
      setdesc(() => true);
    }
  }
  function increament() {
    if (addedImage + 4 < images.length) {
      console.log(addedImage);
      setactiveImages(() => images.slice(addedImage, addedImage + 4));
      setAddedImage(() => addedImage + 1);
      console.log(addedImage);
    }
  }
  let foods = [1, 2, 3, 4];
  function decrement() {
    if (addedImage > 0) {
      setAddedImage(() => addedImage - 1);
      console.log(addedImage);
      setactiveImages(() => images.slice(addedImage, addedImage + 4));
      console.log(addedImage);
    }
  }
  const createMarkUp = (text) => {
    return { __html: text };
  };

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
        <div className="flex flex-col h-fit absolute justify-center max-w-6xl py-5 w-9/12  top-[40vh]">
          <div className=" flex w-full h-fit rounded-md border justify-start items-center shadow-md mb-7">
            <div className="h-16 w-2 bg-[#1F8EFF] rounded-tl-md rounded-bl-md " />
            <InformationCircleIcon className="text-[#1F8EFF] h-7 w-7 mx-5" />
            <div className="flex items-center justify-center">
              <Title3 text={"Special hours today:"} />
              <p className="text-lg ml-1">6:00 AM - 2:00 PM</p>
            </div>
          </div>
          {/* Top with the sidebar */}
          <div className="w-full flex justify-between  ">
            <div className="w-full mr-6">
              <div className="flex mb-6 mt-2">
                <div className="flex justify-center py-3 px-7 mr-4 bg-[#F40D15] w-fit items-center rounded-md cursor-pointer">
                  <StarIcon className="h-6 w-6 fill-transparent stroke-white" />
                  <p className="text-white text-lg font-semibold ml-2">
                    Write a review
                  </p>
                </div>
                <TopButton Icon={CameraIcon} text="Add Photo" />
                <TopButton Icon={ShareIcon} text="Share" />
                <TopButton Icon={BookmarkIcon} text="Save" />
              </div>
              <div className="h-[1px] bg-black opacity-30 mb-7 w-full" />
              <Title2 text={"Menu"} />
              <div className="flex justify-between items-center pt-2">
                <Title3 text={"Most mentioned dishes"} />
                <div className="flex justify-center items-center cursor-pointer">
                  <Title3 text={"View full menu"} />
                  <ChevronRightIcon className="h-4 w-4 ml-2 align-baseline text-black opacity-80" />
                </div>
              </div>
              <div className="overflow-hidden grid grid-cols-4 gap-12">
                {foods.map((one) => (
                  <div
                    key={one}
                    className="h-[200px] w-[200px] flex flex-col relative rounded-md my-4"
                  >
                    <div className="w-full h-4/5 relative">
                      <Image
                        src={activeImages[one - 1]}
                        alt="New Meal"
                        layout="fill"
                        className="rounded-md"
                      />
                    </div>
                    <p className="font-bold text-black text-[15px] opacity-80 line-clamp-1 overflow-ellipsis ml-1">
                      Jalapeno sdfkj fdj fdsoi sf sdfdsf sdfsdf
                    </p>
                    <p className="ml-1">{"3 Photos • 2 Reviews"}</p>
                  </div>
                ))}
              </div>
              <div className="flex my-4">
                <TopButton Icon={ExternalLinkIcon} text="Website menu" />
                <TopButton Icon={ArchiveIcon} text="Full menu" />
              </div>

              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Location & Hours"} />
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Amenities and More"} />
              <div className="grid grid-cols-2">
                {amenities.map((one) => (
                  <AmenitiesItem key={one} text={"Offers Delivery"} value={0} />
                ))}
              </div>
              <div
                onClick={toggleAmenities}
                className="py-2 w-fit mt-6 px-6 items-center border border-black border-opacity-70 rounded-md cursor-pointer hover:bg-[#E2E2E2]"
              >
                <p className="text-base font-semibold">
                  {amenities.length == 4 ? "12 More Attributes" : "Show Less"}
                </p>
              </div>
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"About the Business"} />
              <p
                dangerouslySetInnerHTML={createMarkUp(
                  desc
                    ? listing.description.substring(350, 0) + "..."
                    : listing.description
                )}
                className="text-base text-black font-[400]"
              />
              <div
                onClick={toggleDesc}
                className="py-2 w-fit mt-6 px-6 items-center border border-black border-opacity-70 rounded-md cursor-pointer hover:bg-[#E2E2E2]"
              >
                <p className="text-base font-semibold">
                  {desc ? "Show More" : "Show Less"}
                </p>
              </div>
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Recommended Reviews"} />
              <ReviewItem />
            </div>
            <div className="w-2/5">
              <div className="border border-opacity-70 rounded-md p-4">
                <p>Promotion box</p>
                <Title2 text={"10% off on Online Ordering"} />
              </div>
              <div>
                <p>Info Box</p>
              </div>
              <div>
                <p>more promo Box</p>
              </div>
            </div>
          </div>
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
