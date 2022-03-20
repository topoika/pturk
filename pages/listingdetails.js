import {
  ArchiveIcon,
  BookmarkIcon,
  CalendarIcon,
  CameraIcon,
  ChatIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CubeTransparentIcon,
  DotsHorizontalIcon,
  ExternalLinkIcon,
  InformationCircleIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  ShoppingBagIcon,
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
import LocationAndHours from "../components/detailspage/LocationAndHours";
import MenuItem from "../components/detailspage/MenuItem";
import Footer from "../components/home/Footer";

export default function ListingDetails(props) {
  const listing = props.listing.data[0];
  let images = listing.images.split(",");
  const [activeImages, setactiveImages] = useState(images.slice(0, 4));
  const [amenities, setamenities] = useState(props.attributes.data.slice(0, 4));
  const [desc, setdesc] = useState(true);
  const [addedImage, setAddedImage] = useState(1);
  function toggleAmenities() {
    if (amenities.length == 4) {
      setamenities(() => props.attributes.data);
    } else {
      setamenities(() => props.attributes.data.slice(0, 4));
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
          <div className=" flex w-full h-fit rounded-md border justify-start items-center shadow-search-box mb-7">
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
              {/* Location and hours */}
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Location & Hours"} />
              <LocationAndHours listing={listing} hours={props.hours.data} />
              {/* Amenities and more */}
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Amenities and More"} />
              <div className="grid grid-cols-2">
                {amenities.map((_attribute) => (
                  <AmenitiesItem
                    key={_attribute.id}
                    text={_attribute.name}
                    value={_attribute.value}
                  />
                ))}
              </div>
              <div
                onClick={toggleAmenities}
                className="py-2 w-fit mt-6 px-6 items-center border border-black border-opacity-70 rounded-md cursor-pointer hover:bg-[#E2E2E2]"
              >
                <p className="text-base font-semibold">
                  {amenities.length == 4
                    ? props.attributes.data.length - 4 + " More Attributes"
                    : "Show Less"}
                </p>
              </div>
              {/* About the business */}
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
              {/* Ask the community */}
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <div className="flex justify-between items-center pt-3">
                <Title3 text={"Ask the Community"} />
                <div className="flex justify-center items-center cursor-pointer">
                  <Title3 text={"Ask a question"} />
                  <PlusIcon className="h-4 w-4 ml-2 align-baseline text-black opacity-80" />
                </div>
              </div>
              <p className="text-[16px] mt-5">
                Yelp users haven’t asked any questions yet about{" "}
                <span className="text-[16px] font-semibold">
                  {listing.name}
                </span>
              </p>
              {/* Reviews reconmentation */}
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Recommended Reviews"} />
              {props.reviews.data.map((review) => (
                <ReviewItem key={review.index} review={review} />
              ))}
              <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
              <Title2 text={"Collections Including " + listing.name} />
              <div className="flex justify-between items-center pt-2">
                <Title3 text={"Reciently Added Collections"} />
                <div className="flex justify-center items-center cursor-pointer">
                  <Title3 text={"View All"} />
                  <ChevronRightIcon className="h-4 w-4 ml-2 align-baseline text-black opacity-80" />
                </div>
              </div>
              <div className="overflow-hidden grid grid-cols-4 gap-12">
                {foods.map((one) => (
                  <div
                    key={one}
                    className="h-[250px] w-[200px] flex flex-col relative rounded-md my-4"
                  >
                    <div className="w-full h-4/5 relative">
                      <Image
                        src={activeImages[one - 1]}
                        alt="New Meal"
                        layout="fill"
                        className="rounded-md"
                      />
                      <div className="absolute flex justify-center items-center bottom-0 right-0 px-7 py-10 rounded-tl-md rounded-br-md bg-black bg-opacity-70 ">
                        <BookmarkIcon className="stroke-white fill-white h-5 opacity-100" />
                        <p className="text-white text-xl font-bold ml-[2px]">
                          56
                        </p>
                      </div>
                    </div>

                    <p className="font-bold text-black text-[15px] opacity-80 line-clamp-1 overflow-ellipsis ml-1">
                      Texas Food
                    </p>
                    <p className="ml-1">By Saral E.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second container */}
            <div className="w-2/6">
              <div className="border border-opacity-70 rounded-md p-4">
                <Title2 text={"10% off on Online Ordering"} />
                <div className="text-center w-full h-fit rounded-md bg-[#F40D15] py-2 my-2">
                  <p className="text-white font-bold text-lg">Order Now</p>
                </div>
              </div>
              <div className="border border-opacity-70 rounded-md p-4 my-8">
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-4/5">
                    <p className="text-lg font-bold text-[#057C98] line-clamp-1">
                      {listing.website}
                    </p>
                  </div>
                  <ExternalLinkIcon className="h-8 ml-2" />
                </div>
                <div className="h-[1px] bg-black opacity-30 my-5 w-full" />
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-4/5">
                    <div className="w-1/2">
                      <p className="text-lg font-bold text-[#575a5a]">
                        {listing.phone}
                      </p>
                    </div>
                  </div>
                  <PhoneIcon className="h-8 ml-2" />
                </div>
                <div className="h-[1px] bg-black opacity-30 my-5 w-full" />
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-4/5">
                    <p className="text-lg font-bold text-[#057C98] line-clamp-1 hover:underline ">
                      Get Directions
                    </p>
                    <div className="w-1/2">
                      <p className="text-lg font-bold text-[#575a5a] cursor-default">
                        {listing.address}
                      </p>
                    </div>
                  </div>
                  <CubeTransparentIcon className="h-8 ml-2" />
                </div>
                <div className="h-[1px] bg-black opacity-30 my-5 w-full" />
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-4/5">
                    <p className="text-lg font-bold text-[#057C98] line-clamp-1">
                      Message the Business
                    </p>
                  </div>
                  <ChatIcon className="h-8 ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
          <Title2 text={"People also viewed"} />
          <div className="overflow-hidden grid grid-cols-5 gap-12">
            {foods.map((one) => (
              <div
                key={one}
                className="h-[250px] w-[220px] flex flex-col relative rounded-md my-4"
              >
                <div className="w-full h-4/5 relative">
                  <Image
                    src={activeImages[one - 1]}
                    alt="New Meal"
                    layout="fill"
                    className="rounded-md"
                  />
                </div>
                <p className="font-bold text-black text-[15px] my-2 line-clamp-1 overflow-ellipsis ml-1">
                  {listing.name}
                </p>
                <Rating rat={listing.rating} small={true} />
                <p className="ml-1 text-[12px] my-1 font-normal opacity-80">
                  $ • Coffee & Tea, Breakfast & Brunch, Diners
                </p>
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
          <div className="grid lg:grid-cols-3 my-5 h-fit">
            <div className="w-full">
              <div className="mb-9">
                <Title3 text={"Best of Austin"} />
                <MenuItem text={"This to do in Location"} route={"/"} />
              </div>
              <div className="">
                <Title3 text={"Near me"} />
                <MenuItem text={"Bakeries Near Me"} route={"/"} />
                <MenuItem text={"Breakfast Near Me"} route={"/"} />
                <MenuItem text={"Cheap Breakfast Near Me"} route={"/"} />
                <MenuItem text={"Pie Places Near Me"} route={"/"} />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-9">
                <Title3 text={"Browse Nearby"} />
                <MenuItem Icon={TruckIcon} text={"Restaurants"} route={"/"} />
                <MenuItem Icon={TruckIcon} text={"Night Life"} route={"/"} />
                <MenuItem
                  Icon={ShoppingBagIcon}
                  text={"Shopping"}
                  route={"/"}
                />
                <MenuItem
                  Icon={DotsHorizontalIcon}
                  text={"Show all"}
                  route={"/"}
                />
              </div>
              <div className="">
                <Title3
                  text={"People found Kolache Factory by searching for…"}
                />
                <MenuItem text={"Polish Donut Austin"} route={"/"} />
                <MenuItem text={"Breakfast Near Me"} route={"/"} />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-9">
                <Title3 text={"Dining in Location"} />
                <MenuItem
                  Icon={SearchIcon}
                  text={"Search for Reservations"}
                  route={"/"}
                />
                <MenuItem
                  Icon={CalendarIcon}
                  text={"Book a Table in Location"}
                  route={"/"}
                />
              </div>
              <div className="">
                <Title3 text={"Other Places Nearby"} />
                <MenuItem
                  text={"Find more Bakeries near Kolache Factory"}
                  route={"/"}
                />
                <MenuItem
                  text={"Find more Breakfast Brunch Spots near Kolache Factory"}
                  route={"/"}
                />
                <MenuItem
                  text={"Find more Cafes near Kolache Factory"}
                  route={"/"}
                />
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
          <Title2 text={"Frequently Asked Questions about " + listing.name} />
          {props.faqs.data.map((_faq) => (
            <div key={_faq.index} className="flex flex-col">
              <p className="text-base font-semibold mt-5">{_faq.question}</p>
              <p className="text-sm my-1">{_faq.answer}</p>
            </div>
          ))}
          <div className="h-[1px] bg-black opacity-30 my-9 w-full" />
          <Footer />
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
  let reviews = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/reviews/${
        context.query.id ? context.query.id : Cookies.get("viewedId")
      }`
  ).then((res) => res.json());
  let listingFaqs = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/listingfaqs/${
        context.query.id ? context.query.id : Cookies.get("viewedId")
      }`
  ).then((res) => res.json());
  let hours = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/operatinghours/${
        context.query.id ? context.query.id : Cookies.get("viewedId")
      }`
  ).then((res) => res.json());
  let attributes = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL +
      `/listingattributes/${
        context.query.id ? context.query.id : Cookies.get("viewedId")
      }`
  ).then((res) => res.json());
  return {
    props: {
      listing: listing,
      reviews: reviews,
      faqs: listingFaqs,
      hours: hours,
      attributes: attributes,
    },
  };
}
