import Titles from "./simplecomponents/Titles";
import TopCategory from "./TopCategory";

function FindBestBus({ props }) {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Titles title={"Find the Best Businesses in Town"} />
      <div className="max-w-6xl w-9/12 flex justify-between">
        {props.data.map((res) => (
          <TopCategory key={res.id} title={res.name} img={res.image} />
        ))}
      </div>
    </div>
  );
}

export default FindBestBus;
