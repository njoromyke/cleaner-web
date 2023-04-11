import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibXlrZXNvZnR3YXJlIiwiYSI6ImNsMzFsNnkxaTBiZDQzY3A5bTJoaDA1dG4ifQ.YQJG-0N34EOJ6g6TxlWNgw";

const Map = ({ dragablemarker: draggableMarker, latitude, longitude, onDrag }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longitude || 37.0144);
  const [lat, setLat] = useState(latitude || -1.102554);
  const [zoom, setZoom] = useState(17);
  const marker = useRef(null);

  console.log(lng, lat, "latitude, longitude");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lng, lat],
      zoom,
    });

    // Create a draggable marker
    marker.current = new mapboxgl.Marker({ draggable: true }).setLngLat([lng, lat]).addTo(map.current);

    // Update marker's position on dragend

    if (draggableMarker === false) marker.current.setDraggable(false);

    marker.current.on("dragend", (e) => {
      const { lng, lat } = e.target.getLngLat();
      setLng(lng.toFixed(4));
      setLat(lat.toFixed(4));
      onDrag({ lng, lat });
    });
  });

  const zoomIn = (event) => {
    // prevent page from scrolling
    event.preventDefault();
    map.current.zoomIn();
    setZoom(map.current.getZoom().toFixed(2));
  };

  const zoomOut = (event) => {
    // prevent page from scrolling
    event.preventDefault();
    map.current.zoomOut();
    setZoom(map.current.getZoom().toFixed(2));
  };

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (latitude && longitude) {
      map.current.flyTo({
        center: [longitude, latitude],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });

      setLng(longitude);
      setLat(latitude);

      marker.current.setLngLat([longitude, latitude]);
    }
  }, [latitude, longitude]);

  return (
    <div ref={mapContainer} className="map-container position-relative">
      <div className="lat-lng">
        <span className="lat">Lat: {lat}</span>
        <span className="lng ps-3">Lng: {lng}</span>
      </div>

      <div className="zoom-buttons">
        <button className="btn btn-sm btn-primary" onClick={zoomIn} disabled={zoom === 20}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn btn-sm btn-primary" disabled={zoom === 0} onClick={zoomOut}>
          <i className="fas fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

export default Map;
