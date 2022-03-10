import Image from "next/image";
import Recent from "./../../public/static/images/ls.jpg";

function ListingItem() {
  const tags = ["American(New)", "Food Delivery Services", "Accai Bowls"];
  return (
    <div>
      <div className="flex justify-start p-4 border rounded-md border-opacity-40 w-full hover:shadow-lg cursor-pointer">
        <div className="">
          <Image src={Recent} alt="New listing" />
        </div>
        <div className="flex flex-col pr-7 pl-6">
          <p className="text-black font-bold text-xl opacity-90">
            Kolache Factory
          </p>
          <div className="py-2 flex">
            {tags.map((tag) => (
              <p
                key={tag.key}
                className="text-[12px] h-fit mr-2 font-bold text-black opacity-75 bg-black rounded-md bg-opacity-10 text-center hover:bg-opacity-40 w-fit px-3 py-[2px]"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingItem;
