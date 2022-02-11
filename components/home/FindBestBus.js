import Titles from "./simplecomponents/Titles";
import Hotels from "./../../public/static/images/hotels.jpg";
import Gym from "./../../public/static/images/gym.jpg";
import Dentist from "./../../public/static/images/dentists.jpg";
import DryCleaner from "./../../public/static/images/drycleaner.jpg";
import TopCategory from "./TopCategory";

function FindBestBus() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Titles title={"Find the Best Businesses in Town"} />
      <div className="max-w-6xl w-9/12 flex justify-between">
        <TopCategory title={"Gyms"} img={Gym} />
        <TopCategory title={"Hotels"} img={Hotels} />
        <TopCategory title={"Dentists"} img={Dentist} />
        <TopCategory title={"Dry Cleaner"} img={DryCleaner} />
      </div>
    </div>
  );
}

export default FindBestBus;
