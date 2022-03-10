import { StarIcon } from "@heroicons/react/outline";

function Rating({ rat }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((rating) => (
        <div
          key={rating}
          className={
            rat >= rating
              ? rat == 0
                ? "bg-gray-400 rounded-md items-center mr-1"
                : rat == 1
                ? "bg-[#c96e44] rounded-md items-center mr-1"
                : rat == 2
                ? "bg-[#fa8752] rounded-md items-center mr-1"
                : rat == 3
                ? "bg-[#fc7333] rounded-md items-center mr-1"
                : rat == 4
                ? "bg-[#FF523D] rounded-md items-center mr-1"
                : "bg-[#E00707] rounded-md items-center mr-1"
              : "bg-gray-400 rounded-md items-center mr-1"
          }
        >
          <StarIcon className="h-6 fill-white stroke-transparent " />
        </div>
      ))}
    </div>
  );
}

export default Rating;
