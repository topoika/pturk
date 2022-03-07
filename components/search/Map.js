import { LocationMarkerIcon } from "@heroicons/react/solid";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoBox,
  InfoWindow,
} from "@react-google-maps/api";
function MyMap() {
  const containerStyle = {
    width: "100%",
    height: "90vh",
  };

  const center = {
    lat: 41.2797,
    lng: 36.3361,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  const markers = [
    {
      id: 1,
      lat: 41.2797,
      lng: 36.3361,
    },
    {
      id: 2,
      lat: 41.23,
      lng: 34.3361,
    },
    {
      id: 3,
      lat: 40.23,
      lng: 34.3361,
    },
    {
      id: 4,
      lat: 43.23,
      lng: 34.3361,
    },
  ];
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      {markers.map((_marker) => (
        <Marker
          key={_marker.id}
          position={{ lat: _marker.lat, lng: _marker.lng }}
          animation="drop"
          icon={LocationMarkerIcon}
        >
          <InfoWindow position={center}>
            <p>{_marker.lat}</p>
          </InfoWindow>
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyMap;
