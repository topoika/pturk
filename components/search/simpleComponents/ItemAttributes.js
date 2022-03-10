import { CheckIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

function ItemAttributes({ value, text }) {
  return (
    <div className="flex">
      {value == 1 ? (
        <CheckIcon className="h-6 text-green-900" />
      ) : (
        <XIcon className="h-6 text-red-800" />
      )}
      <p className="text-sm mx-3">{text}</p>
    </div>
  );
}

export default ItemAttributes;
