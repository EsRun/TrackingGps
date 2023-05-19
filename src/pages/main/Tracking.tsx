import React, { useState } from "react";
import Gmap from "../../components/Gmap";

interface LatLng {
  lat: number;
  lng: number;
}
const linePath: google.maps.LatLngLiteral[] = [
  { lat: 37.563913, lng: 127.002242 },
  { lat: 37.570076, lng: 127.018883 },
  { lat: 37.569283, lng: 127.03225 },
  { lat: 37.576418, lng: 127.041389 },
  { lat: 37.587727, lng: 127.060987 },
  { lat: 37.592822, lng: 127.078284 },
  { lat: 37.598478, lng: 127.101817 },
  { lat: 37.5997, lng: 127.13834 },
];

const Tracking: React.FC = () => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 37.559192,
    lng: 126.972219,
  });

  const [poly, setPolyLine] = useState<google.maps.LatLngLiteral[]>([
    {
      lat: 37.559192,
      lng: 126.972219,
    },
  ]);

  const centerHandler = () => {
    const centerLatLng: google.maps.LatLngLiteral = {
      lat: 37.559192,
      lng: 126.972219,
    };
    setCenter(centerLatLng);
  };

  const polyHandler = () => {
    setPolyLine([...linePath]);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          margin: "20px 0 0 20px",
          zIndex: 1,
        }}
      >
        <button
          style={{ width: "100px", height: "50px" }}
          onClick={centerHandler}
        >
          center Test
        </button>
        <button
          style={{ width: "100px", height: "50px" }}
          onClick={polyHandler}
        >
          polyLine Test
        </button>
      </div>
      <Gmap changeCenter={center} changePoly={poly} />
    </div>
  );
};

export default Tracking;
