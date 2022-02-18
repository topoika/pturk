import Image from "next/image";
function HeaderCategoriesItem({ text, img }) {
  return (
    <div className="flex mx-2 group">
      <Image
        src={img}
        alt={text}
        height="25"
        width="20"
        className="fill-white"
      />

      <p className="text-white text-s font-bold mx-1 pl-1.5 cursor-pointer  group-hover:animate-pulse group-hover:underline">
        {text}
      </p>
    </div>
  );
}

export default HeaderCategoriesItem;
