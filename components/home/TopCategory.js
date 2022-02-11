import Image from "next/image";

function TopCategory({ title, img }) {
  return (
    <div className="justify-center flex flex-col bg-white cursor-pointer rounded-md my-7 hover:shadow-lg ">
      <Image
        height="230"
        width="250"
        src={img}
        alt={title}
        objectFit="cover"
        className="rounded-t-md"
      />
      <div className="justify-center content-center flex">
        <p className=" text-base font-bold py-3 al text-black">{title}</p>
      </div>
    </div>
  );
}

export default TopCategory;
