import {
  DotsHorizontalIcon,
  PhotographIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Rating from "../universal/Rating";

function ReviewItem({ review }) {
  return (
    <div className="flex flex-col my-5">
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
            <p className="text-base font-bold text-black">
              {review?.user?.first_name +
                " " +
                review?.user?.last_name.substring(1, 0) +
                "."}
            </p>
            <p className="text-base text-black">{review?.user?.address}</p>
            <div className="flex justify-start items-center">
              <UserIcon className="h-4 text-black opacity-60" />
              <p className="text-[12px] font-semibold opacity-70 mx-1">
                {"248"}
              </p>
              <PhotographIcon className="h-4 text-black opacity-60" />
              <p className="text-[12px] font-semibold opacity-70 mx-1">
                {"248"}
              </p>
              <StarIcon className="h-4 text-black opacity-60" />
              <p className="text-[12px] font-semibold opacity-70 mx-1">
                {"248"}
              </p>
            </div>
          </div>
        </div>
        <DotsHorizontalIcon className="h-6 w-7 text-black cursor-pointer" />
      </div>
      <div className="flex items-center">
        <Rating rat={review?.rating} small={true} />
        <p className="mx-4 text-base">{"12/11/2020"}</p>
      </div>
      <p className="text-sm my-3 text-black font-[400]">
        {review?.description}
      </p>
      {review.reply_id != null ? (
        <div className="flex h-fit w-full">
          <div className="w-1 bg-[#EBEBEB]" />
          <div className="flex-col w-full ml-7">
            <div className="flex w-full justify-between items-start ">
              <div className="flex my-3 h-fit">
                <Image
                  className="h-8 w-8 rounded-full "
                  height="45"
                  width="45"
                  objectFit="fit"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile Image"
                />
                <div className="flex flex-col justify-center mx-3">
                  <p className="text-base font-bold text-black">UserName</p>
                  <p className="text-base text-black">Business Owner</p>
                </div>
              </div>
            </div>
            <p className="text-base">{"12/11/2020"}</p>
            <p className="text-sm my-3 text-black font-[400]">
              {review?.reply?.description}
            </p>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default ReviewItem;
