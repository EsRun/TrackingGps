import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
  InfoWindow,
  InfoWindowF,
  PolylineF,
  CircleF,
  MarkerF,
} from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";
import MarkerModal from "./MarkerModal";
import { useOutletContext } from "react-router-dom";

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

const circleData: Pick<markerDataInterface, "id">[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const CustomModal: any = ({
  titles,
  contents,
}: {
  titles: any;
  contents: any;
}) => {
  return (
    <div>
      <p>{titles}</p>
      <p>{contents}</p>
    </div>
  );
};

// 센터 이동, 폴리라인 생성, 마커 생성
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
  const [circle, setCircle] = useState<any>(null);
  const [isModal, setIsModal] = useState<boolean>(false);
  const modalClose = () => setIsModal(false);

  const contextTest: any = useOutletContext();

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
  }, [changeCenter, changePoly, changeMarker, contextTest]);

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

  const onLoadCircle = useCallback((el: any) => {
    // usestate 사용해서 구현해야 됨
  }, []);

  const handleMarker = (el: any) => {
    if (activeMarker === el.id) {
      return false;
    }
    if (circle === el.id) {
      return false;
    }
    setActiveMarker(el.id);
    setCircle(el.id);
    setIsModal(true);
  };

  const handleClose = () => {
    setActiveMarker(null);
    setCircle(null);
  };

  return isLoaded ? (
    <GoogleMap
      //mapContainerStyle={containerStyle}
      mapContainerStyle={{ width: "100%", height: "100vh" }}
      center={mapCenter}
      //onLoad={onLoad}
      onClick={handleClose}
      onUnmount={onUnmount}
      options={{ mapTypeControl: false, zoom: 13 }}
    >
      {marker.map((el, idx) => (
        <MarkerF key={el.id} position={el} onClick={() => handleMarker(el)}>
          {activeMarker === el.id && (
            <InfoWindowF onCloseClick={handleClose}>
              {/* <MarkerModal isModal={isModal} modalClose={modalClose} /> */}
              <CustomModal
                titles={markerData[0].title}
                contents={markerData[0].content}
              />
              {/* <div>
                <p>{markerData[idx].title}</p>
                <p>{markerData[idx].content}</p>
              </div> */}
            </InfoWindowF>
          )}
          {circle === el.id && (
            <CircleF
              center={el}
              radius={contextTest.currentSelect}
              //onUnmount={() => setCircle(null)}
            />
          )}
        </MarkerF>
      ))}
      <PolylineF path={poly} options={options} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Gmap;
