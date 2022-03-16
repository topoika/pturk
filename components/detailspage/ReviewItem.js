import { DotsHorizontalIcon, PhotographIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Rating from "../universal/Rating";

function ReviewItem() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start">
        <div className="flex my-3 h-fit">
          <Image
            className="h-1 w-8 rounded-full "
            height="45"
            width="65"
            objectFit="fit"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile Image"
          />
          <div className="flex flex-col justify-center mx-3">
            <p className="text-base font-bold text-black">UserName</p>
            <p className="text-base text-black">Location Ax</p>
            <div className="flex justify-start">
              <PhotographIcon className="h-5 text-black opacity-60" />
            </div>
          </div>
        </div>
        <DotsHorizontalIcon className="h-6 w-7 text-black" />
      </div>
      <div className="flex">
        <Rating rat={2} small={true} />
        <p>{Date.now}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
