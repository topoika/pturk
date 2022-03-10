import Image from "next/image";
import React, { useState } from "react";

function ListingItemImageSlider({ data }) {
  let activeImage = 0;
  const [image, setimage] = useState(data[activeImage]);
  function increament() {
    if (activeImage < data.length) {
      activeImage++;
    }
  }
  function decrement() {
    if (activeImage > 0) {
      activeImage--;
    }
  }
  return (
    <div className="w-6/12 rounded-md bg-black relative">
      <Image
        src={image}
        alt="New listing"
        layout="fill"
        className="object-fill rounded-md"
      />
    </div>
  );
}

export default ListingItemImageSlider;
