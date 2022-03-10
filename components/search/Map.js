import { LocationMarkerIcon } from "@heroicons/react/solid";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import StarImageActive from "../../public/static/images/map/star.svg";
import StarImage from "../../public/static/images/map/star1.svg";
function MyMap({ data }) {
  const containerStyle = {
    width: "100%",
    height: "90vh",
    position: "fixed",
  };

  const center = {
    lat: 41.2797,
    lng: 36.3361,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  console.log(data);
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
      {data.map((_listing) => (
        <Marker
          key={_listing.id}
          position={{ lat: _listing.latitude, lng: _listing.longitude }}
        ></Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;
