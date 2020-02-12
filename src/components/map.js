import React, { useState } from 'react';
import { HEREMap, Marker } from 'here-maps-react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button from '../components/Button';

const styles = StyleSheet.create({
    markerBtn: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 99,
        backgroundColor: '#782878',
        color: '#fff',
        width: '20px',
        borderRadius: '100%',
        margin: 'auto',
        textAlign:'center',
        fontWeight: 'bold'
        
    },
})

const positions = [
    {
        lat: -23.553741,
        lng: -46.654862,
        info: 5
    },
    {
        lat: -23.561259,
        lng: -46.662029,
        info: 9
    },
    {
        lat: -23.5603186,
        lng: -46.6730228,
        info: 2
    }
]

const Map = () => {

    return (
    <>
    <HEREMap
    appId="C5yOBfoD80gJHCmKhP2731n4mVyQKK_2Ae987sM0sys"
    center= {{ lat: -23.557536, lng: -46.662385 }}
    zoom={13}
    >
        {positions.map((el, index) =>
            <Marker
                key={index}
                lat={el.lat}
                lng={el.lng}
            >
            <div className={css(styles.markerBtn)}>{el.info}</div>
            </Marker>
        )}
        </HEREMap>
    </>
  );
}

export default Map;