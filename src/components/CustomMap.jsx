import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';

export const CustomMap = () => {
  const MAP_API_KEY = import.meta.env.VITE_M_API_KEY;
  const MAP_ID = import.meta.env.VITE_M_ID;
  const mapParams = {
    zoom: 17,
    center: { lat: 43.8593729542859, lng: -79.04016655890393 },
    MAP_ID: MAP_ID,
  };

  return (
    <APIProvider
      apiKey={MAP_API_KEY}
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Map
        defaultZoom={mapParams.zoom}
        defaultCenter={mapParams.center}
        mapId={mapParams.MAP_ID}
        disableDefaultUI={true}
        zoomControl={true}
      >
        <AdvancedMarker position={mapParams.center}>
          <Pin
            background={'#7ca982'}
            glyphColor={'#243e36'}
            borderColor={'#f1f7ed'}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};
