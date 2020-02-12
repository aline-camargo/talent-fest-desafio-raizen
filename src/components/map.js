import React from 'react';
import { HEREMap, Marker } from 'here-maps-react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  markerBtn: {
    backgroundColor: '#782878',
    color: '#fff',
    width: 'max-content',
    borderRadius: '2px',
    fontWeight: 'bold',
    padding: '4px',
    fontSize: '0.9em',
    ':after': {
      content: '\'\'',
      left: '36px',
      top: '22px',
      width: '14px',
      height: '13px',
      position: 'absolute',
      backgroundColor: '#782878',
      clipPath: 'polygon(47% 100%, 0 0, 100% 0)',
    }
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
        center={{ lat: -23.557536, lng: -46.662385 }}
        zoom={14}
      >
        {positions.map((el, index) =>
          <Marker
            key={index}
            lat={el.lat}
            lng={el.lng}
          >
            <div className={css(styles.markerBtn)}>{el.info} patinetes</div>
          </Marker>
        )}
      </HEREMap>
    </>
  );
}

export default Map;