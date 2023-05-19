import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

const onLoads = (polyline: any) => {
  console.log("polyline: ", polyline);
};

const path = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
];

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ],
  zIndex: 1,
};

interface Props {
  changeCenter: google.maps.LatLngLiteral;
  changePoly: google.maps.LatLngLiteral[];
  //value: string;
  //className?: string;
  //style?: CSSProperties;
  //placeholder?: string;
  //onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  //onSearch: () => void;
}

const Gmap: React.FC<Props> = ({ changeCenter, changePoly }) => {
  const [coordinateCenter, coordinateSetCenter] =
    useState<google.maps.LatLngLiteral>({
      lat: 37.559192,
      lng: 126.972219,
    });

  const [mapCenter, setMapCenter] = useState(changeCenter);
  const [poly, setPoly] = useState(changePoly);

  useEffect(() => {
    setMapCenter(changeCenter);
    setPoly(changePoly);
  }, [changeCenter, changePoly]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new google.maps.LatLngBounds(coordinateCenter);
    map.setZoom(20);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      //onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false, zoom: 13 }}
    >
      <Polyline onLoad={onLoads} path={poly} options={options} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Gmap;
