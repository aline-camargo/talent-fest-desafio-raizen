import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import HEREMap, { Marker } from 'here-maps-react';

const styles = StyleSheet.create({
    maps: {
        width: '700px',
        height: '480px',
        padding: '1px',
        margin:'3px'
    }
})

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

// let router = plataform.getRoutingService();

// router.calculateRoute(rountingParam, onResult, error => { alert(error.message)})

const Map = () => {
    return (
    <div className={css(styles.maps)}>  
        <HEREMap
        appId="C5yOBfoD80gJHCmKhP2731n4mVyQKK_2Ae987sM0sys"
        //appCode="my_app_code"
        center= {{ lat: -23.557536, lng: -46.662385 }}
        zoom={15}
        >
            {positions.map((el) =>
                <Marker
                lat={el.lat}
                lng={el.lng}
                // onTap={H.util.Event('tap', console.log('clicou')}
                />
            )}
        
        </HEREMap>
    </div>
  );
}

export default Map;