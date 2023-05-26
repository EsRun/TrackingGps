import React, { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

interface LatLng {
  id: number;
  lat: number;
  lng: number;
}

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
  changeCenter: LatLng;
  changePoly: LatLng[];
  changeMarker: LatLng[];
  //value: string;
  //className?: string;
  //style?: CSSProperties;
  //placeholder?: string;
  //onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  //onSearch: () => void;
}

interface markerDataInterface {
  id: number;
  title: string;
  content: string;
}

const markerData: markerDataInterface[] = [
  { id: 1, title: "place1", content: "content1" },
  { id: 2, title: "place2", content: "content2" },
  { id: 3, title: "place3", content: "content3" },
  { id: 4, title: "place4", content: "content4" },
  { id: 5, title: "place5", content: "content5" },
];
const Gmap: React.FC<Props> = ({ changeCenter, changePoly, changeMarker }) => {
  const [coordinateCenter, coordinateSetCenter] =
    useState<google.maps.LatLngLiteral>({
      lat: 37.559192,
      lng: 126.972219,
    });

  const [mapCenter, setMapCenter] = useState(changeCenter);
  const [poly, setPoly] = useState(changePoly);
  const [marker, setMarker] = useState(changeMarker);
  const [activeMarker, setActiveMarker] = useState<any>(null);

  const center = useMemo(
    () => ({
      lat: 37.559192,
      lng: 126.972219,
    }),
    []
  );

  const onMarker = () => {
    console.log("marker");
  };

  useEffect(() => {
    setMapCenter(changeCenter);
    setPoly(changePoly);
    setMarker(changeMarker);
  }, [changeCenter, changePoly, changeMarker]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);

  const onLoadMarker = () => {};

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

  const handleMarker = (id: number) => {
    if (activeMarker === id) {
      return false;
    }
    setActiveMarker(id);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      //onLoad={onLoad}
      onClick={() => setActiveMarker(null)}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false, zoom: 13 }}
    >
      {marker.map((el, idx) => (
        <Marker key={el.id} position={el} onClick={() => handleMarker(el.id)}>
          {activeMarker === el.id
            ? markerData.map((el2, idx2) =>
                activeMarker === el2.id ? (
                  <InfoWindow onCloseClick={() => null}>
                    <div>
                      <p>{markerData[idx].title}</p>
                      <p>{markerData[idx].content}</p>
                    </div>
                  </InfoWindow>
                ) : null
              )
            : null}
        </Marker>
      ))}
      {/* 폴리라인에 옵션 사용하면 폴리라인이 안 그려지는 경우 발생 왜??? */}
      <Polyline path={poly} /* options={options} */ />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Gmap;
