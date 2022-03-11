import { InformationCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import ListingItem from "./ListingItem";

function Results({ data }) {
  return (
    <div>
      <p className="text-sm text-black opacity-80 font-medium">
        Austin {">"} Restaurants{" "}
      </p>
      <div className="flex justify-between">
        <p className="text-black font-bold text-[23px] my-2 opacity-80">
          The Best 10 Restaurants in Austin, TX
        </p>
        <div className="flex">
          <p className="text-black font-normal text-[15px]">Sort: </p>
          <p className="text-black font-semibold text-[15px] ml-1 hover:underline cursor-pointer">
            Recomended 🔽
          </p>
        </div>
      </div>
      <div className="flex justify-start mb-7 mt-5">
        <div className="flex justify-between content-center items-center border-black border-opacity-30 border pl-6 h-fit rounded-md mr-6">
          <p className="text-[18px] text-black mr-6 font-[400]">Delivery</p>
          <Image
            src={
              "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/74612a9036a6/assets/img/svg_illustrations/delivery_70x56_v2.svg"
            }
            alt="Delivery"
            width="70"
            height="60"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-between content-center items-center border pl-6 h-fit rounded-md">
          <p className="text-[18px] text-black mr-6 font-[400]">Takeout</p>
          <Image
            src={
              "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/74612a9036a6/assets/img/svg_illustrations/delivery_70x56_v2.svg"
            }
            alt="Delivery"
            width="70"
            height="60"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex items-center mt-3 mb-7">
        <p className="text-black font-bold text-[17px]  opacity-80">
          Sponsored Results
        </p>
        <InformationCircleIcon className="h-5 ml-1 stroke-black fill-transparent opacity-80" />
      </div>
      {data.sponsored.map((listing) => (
        <ListingItem
          key={listing.id}
          listing={listing}
          index={data.sponsored.indexOf(listing) + 1}
        />
      ))}
      <p className="text-black font-bold text-[17px] mt-4 mb-6 opacity-80">
        All Results
      </p>
      {data.data.map((listing) => (
        <ListingItem
          key={listing.id}
          listing={listing}
          index={data.data.indexOf(listing) + 1}
        />
      ))}
    </div>
  );
}

export default Results;
