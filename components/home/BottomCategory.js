import Image from "next/image";

function BottomCategory({ img, name }) {
  return (
    <div className="group bg-white w-64 h-36 my-4 flex flex-col justify-center rounded-md cursor-pointer hover:border border-blue-700 hover:shadow-main-box-shadow ">
      <Image src={img} width="60" height="60" objectFit="contain" alt={name} />
      <div className="flex justify-center content-center ">
        <p className=" text-base font-bold py-1 al text-black z-20 group-hover:text-[#0073bb]">
          {name}
        </p>
      </div>
    </div>
  );
}

export default BottomCategory;
