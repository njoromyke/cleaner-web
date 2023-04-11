import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibXlrZXNvZnR3YXJlIiwiYSI6ImNsMzFsNnkxaTBiZDQzY3A5bTJoaDA1dG4ifQ.YQJG-0N34EOJ6g6TxlWNgw";

const Map = ({ dragablemarker: draggableMarker, latitude, longitude, onDrag, showSearch }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longitude || 37.0144);
  const [lat, setLat] = useState(latitude || -1.102554);
  const [zoom, setZoom] = useState(17);
  const marker = useRef(null);

  const searchInput = useRef(null);

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

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchInput.current.value;
    if (query) {
      // Use Mapbox Geocoding API to search for location
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].center;
            map.current.flyTo({
              center: [lng, lat],
              zoom: 17,
              essential: true, // this animation is considered essential with respect to prefers-reduced-motion
            });
            setLng(lng.toFixed(4));
            setLat(lat.toFixed(4));
            marker.current.setLngLat([lng, lat]);
            onDrag({ lng, lat });
          } else {
            alert("Location not found. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error searching for location:", error);
        });
    } else {
      alert("Please enter a location to search.");
    }
    searchInput.current.value = "";
  };

  useEffect(() => {
    if (latitude && longitude) {
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 17,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
      setLng(longitude.toFixed(4));
      setLat(latitude.toFixed(4));
      marker.current.setLngLat([longitude, latitude]);
    }
  }, [latitude, longitude]);

  return (
    <div>
      {showSearch && (
        <form className="row mb-3">
          <input ref={searchInput} type="text" placeholder="Search location" className="form-control form-control-sm col-10" />
          <button className="col-2 btn btn-sm btn-success" onClick={handleSearch}>
            <i className="fa fa-search" />
          </button>
        </form>
      )}
      <div ref={mapContainer} className="map-container" />
      <div className="map-controls mt-3">
        <button className="btn btn-success btn-sm me-2" onClick={zoomIn}>
          <i className="fa fa-plus" />
        </button>
        <button className="btn btn-success btn-sm me-2" onClick={zoomOut}>
          <i className="fa fa-minus" />
        </button>
      </div>
    </div>
  );
};

export default Map;
