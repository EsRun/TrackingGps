import React, { useState } from "react";
import Gmap from "../../components/Gmap";

interface LatLng {
  lat: number;
  lng: number;
}

const Tracking: React.FC = () => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const centerHandler = () => {
    const centerLatLng: google.maps.LatLngLiteral = {
      lat: 37.451259,
      lng: 126.705314,
    };
    setCenter(centerLatLng);
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
          테스트
        </button>
      </div>
      <Gmap changeCenter={center} />
    </div>
  );
};

export default Tracking;
