import { CheckIcon, XIcon } from "@heroicons/react/outline";

function AmenitiesItem({ text, value }) {
  return (
    <div className="flex items-center my-2">
      {value == 1 ? (
        <CheckIcon className="h-7 text-black" />
      ) : (
        <XIcon className="h-7 text-black opacity-60" />
      )}
      <p
        className={
          value == 1
            ? "text-black font-semibold ml-1"
            : "text-black font-semibold ml-1 opacity-60"
        }
      >
        {text}
      </p>
    </div>
  );
}

export default AmenitiesItem;
