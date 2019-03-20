import React, { useEffect, useState } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      failure => setErrorMessage(failure.message)
    );
  }, []);

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay latitude={lat} />;
  } else {
    content = <Spinner message="Please allow location request" />;
  }

  return content;
};
