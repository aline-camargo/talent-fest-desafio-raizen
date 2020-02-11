import React from 'react';
import HEREMap, { Marker } from 'here-maps-react';

const positions = [
    {
        lat: -23.553741,
        lng: -46.654862
    },
    {
        lat: -23.561259,
        lng: -46.662029
    },
    {
        lat: -23.5603186,
        lng: -46.6730228
    }
]

const Map = () => {

    return (
    <HEREMap
    appId="C5yOBfoD80gJHCmKhP2731n4mVyQKK_2Ae987sM0sys"
    //appCode="my_app_code"
    center= {{ lat: -23.557536, lng: -46.662385 }}
    zoom={15}
    >
        {positions.map((el, index) =>
            <Marker
            id={index}
            lat={el.lat}
            lng={el.lng}
            onTap={() => console.log('clicou')}
            />
        )}
    </HEREMap>

  );
}

export default Map;