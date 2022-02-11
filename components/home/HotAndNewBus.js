import HotAndNewBusItem from "./HotAndNewBusItem";
import Titles from "./simplecomponents/Titles";
import One from "./../../public/static/images/listings/one.png";

function HotAndNewBus() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Titles title={"Recent Collections"} />
      <div className="max-w-6xl w-9/12 flex justify-between mt-7 ">
        <HotAndNewBusItem
          name="Nash Hot Chicken & Ramen"
          img={One}
          reviews="23"
          cost="$$$"
          city="Angara"
          country="Turkey"
          open="now"
        />
        <HotAndNewBusItem
          name="Sunday Lunch"
          img={One}
          reviews="456"
          cost="$$"
          city="Angara"
          country="Turkey"
          open="3 Days Ago"
        />
        <HotAndNewBusItem
          name="Black Owned Restaurants Near Me"
          img={One}
          reviews="10"
          cost="$$$$"
          city="Nairobi"
          country="Kenya"
          open="18 Weeks Ago"
        />
      </div>
      <p className="text-base font-normal text-[#0073bb] my-5 cursor-pointer hover:underline">
        See more Hot and New Businesses
      </p>
    </div>
  );
}

export default HotAndNewBus;
