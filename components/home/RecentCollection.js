import RecentCollectionItem from "./simplecomponents/RecentCollectionItem";
import Titles from "./simplecomponents/Titles";

function RecentCollection() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Titles title={"Recent Collections"} />
      <div className="max-w-6xl w-9/12 flex justify-between border border-slate-600  mt-7 rounded-md">
        <div className="w-full mx-4 ">
          <RecentCollectionItem
            name="Jens New Home 🚞"
            author="David Topoika T."
            places="54"
          />

          <RecentCollectionItem
            name="Welcome Friends to come visit"
            author="David Lekula T."
            places="54"
          />
          <RecentCollectionItem
            name="Neices & Nephews In Austin"
            author="Jonnng T."
            places="54"
          />
        </div>
        <div className="w-full mx-4 ">
          <RecentCollectionItem
            name="Austin Girls Trip"
            author="Katie F."
            places="54"
          />

          <RecentCollectionItem
            name="Austin Is Chic"
            author="Xia M."
            places="54"
          />
          <RecentCollectionItem name="DDD Austin" author="Sal F." places="54" />
        </div>
      </div>
      <p className="text-base font-normal text-[#0073bb] my-4 cursor-pointer hover:underline">
        Browse more collections
      </p>
    </div>
  );
}

export default RecentCollection;
