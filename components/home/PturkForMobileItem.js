import Image from "next/image";

function PturkForMobileItem({ img, text }) {
  return (
    <div className="border w-full flex flex-col justify-center py-10 items-center cursor-pointer rounded-md group hover:border-[#0073bb] hover:shadow-md ">
      <p className=" text-base font-bold py-3 al text-black group-hover:text-[#0073bb]">
        {text}
      </p>
      <Image src={img} alt={text} />
    </div>
  );
}

export default PturkForMobileItem;
