import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import Title3 from "../universal/Title3";

function LocationAndHours({ listing, hours }) {
  const containerStyle = {
    width: "100%",
    height: "200px",
  };
  let today = new Date();
  let day = today.getDay();
  let hour = today.getHours();
  let weekdays = hours.filter((_day) => _day.day_of_week === day);
  let activeDay = weekdays[0];
  const [closed, setclosed] = useState(
    hour >= +activeDay.open_time.substring(1, 0) &&
      hour <= +activeDay.close_time.substring(1, 0) + 12
      ? true
      : false
  );
  const center = {
    lat: listing.latitude,
    lng: listing.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });
  let searchUrl =
    "https://www.google.com/maps/search/" +
    listing.name +
    "/@" +
    listing.latitude +
    "," +
    listing.longitude +
    ",17z";
  console.log(searchUrl);
  return (
    <div className="flex justify-evenly">
      <div className="h-fit w-full">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            clickableIcons={false}
            options={{
              fullscreenControl: false,
              zoomControl: false,
              gestureHandling: "none",
            }}
          >
            <Marker position={center}></Marker>
          </GoogleMap>
        ) : (
          <></>
        )}
        <div className="flex justify-between items-center mt-2">
          <p className="text-base font-semibold w-3/5 line-clamp-2  overflow-ellipsis">
            {listing.address}
          </p>

          <div className="py-2 w-1/2 h-fit mt-6 px-6 text-center align-top  border border-black border-opacity-70 rounded-md cursor-pointer hover:bg-[#E2E2E2]">
            <a
              target="_blank"
              rel="noreferrer"
              //   href="https://www.google.com/maps/search/${listing.address}/@41.2724705,36.3490649,17z"
              href={searchUrl}
            >
              <p className="text-[14px] font-semibold">Get Directions</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-col w-5/6 px-6">
        {hours.map((weekday) => (
          <div key={weekday.day} className="grid grid-cols-3 items-center">
            <p className="font-semibold text-[17px] w-full mb-[7px]">
              {weekday.day}
            </p>
            <p className="font-semibold text-[17px] w-full flex justify-center items-center">
              {weekday.open_time}
              <span>
                <div className="bg-black h-[2px] w-3 ml-1" />
              </span>
            </p>
            <p className="font-semibold text-[17px] w-full">
              {weekday.close_time}
            </p>
          </div>
        ))}
      </div>
      <div className="items-start  w-2/5 flex-col justify-center flex ">
        <p
          className={
            !closed
              ? "font-semibold text-lg text-red-700"
              : "font-semibold text-lg text-green-700"
          }
        >
          {!closed ? "Closed now" : "Open Now"}
        </p>
      </div>
    </div>
  );
}

export default LocationAndHours;
