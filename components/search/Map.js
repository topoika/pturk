import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import leafletCss from "!isomorphic-style-loader!css-loader?modules=false!leaflet/dist/leaflet.css"; //if use isomorphic-style-loader
import s from "./GenerateMap.css";

let RL = false;
let Map = false;
let TileLayer = false;
let Marker = false;
let Popup = false;
if (process.env.BROWSER) {
  RL = require("react-leaflet");
  Map = RL.Map;
  TileLayer = RL.TileLayer;
  Marker = RL.Marker;
  Popup = RL.Popup;
}

function MyMap() {
  const position = [51.505, -0.09];

  return (
    <div className={s.root}>
      {process.env.BROWSER && (
        <Map
          style={{ width: "100%", height: "500px" }}
          center={position}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon="">
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      )}
    </div>
  );
}

export default withStyles(s, leafletCss)(MyMap);
