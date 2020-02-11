import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import HEREMap, { Marker } from 'here-maps-react';
import Button from '../components/Button';
import Link from '../components/Link'

const styles = StyleSheet.create({
    mapPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    maps: {
        width: '350px',
        height: '380px',
        padding: '1px',
        margin: '3px',
        border: '1px solid #404040',
        borderRadius: '3px'
    },
    button: {
        margin: '2em auto',
        padding: '5px',
        fontWeight: 'bold',
        color:'rgb(251, 206, 7)',
        backgroundColor: '#404040',
        width: '25em'
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

const Map = () => {

    return (
    <div className={css(styles.mapPage)}>
        <div className={css(styles.maps)}>  
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
        </div>
        <Button
        className={css(styles.button)}
        onClick={() => console.log('Alugue')}
        title='Alugue agora'
        />
        <Link
        onClick={() => console.log('Como funciona')}     
        title='Como funciona'      
        />
    </div>
  );
}

export default Map;