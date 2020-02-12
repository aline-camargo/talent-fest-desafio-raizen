import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Map from '../components/map';
import Button from '../components/Button';
import Link from '../components/Link';

const styles = StyleSheet.create({
    title: {
        color:'#404040'
    },
    mapPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
    },
    maps: {
        width: '350px',
        height: '380px',
        padding: '1px',
        margin: '3px',
        border: '1px solid #404040',
        borderRadius: '3px',
        position:'relative'
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

const MapPage = () => {
    return (
        <div className={css(styles.mapPage)}>
            <h3 className={css(styles.title)}>Quantidade de patinetes disponíveis nessa região</h3>
        <div className={css(styles.maps)}> 
        <Map />
        </div>
        <Button
        className={css(styles.button)}
        handleClick={() => console.log('Alugue')}
        title='Alugue agora'
        />
        <Link
        handleClick={() => console.log('Como funciona')}     
        title='Como funciona'      
        />
        </div>
    )
}

export default MapPage;
