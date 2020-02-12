import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import menu from '../images/menu.png';
import Map from '../components/map';
import Button from '../components/Button';
import Link from '../components/Link';
import { useHistory } from 'react-router-dom';


const styles = StyleSheet.create({
  mapPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '80vh'
  },
  header: {
    height: '17vh',
    backgroundColor: 'rgb(251, 206, 7)',
  },
  menu: {
    width: "10%",
    margin: "10px"
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
    fontSize: '1.2em',
    margin: '1em 0',
    padding: '1em',
    fontWeight: 'bold',
    color: 'rgb(251, 206, 7)',
    backgroundColor: '#404040',
    border: 'none',
    width: '85%'
  }
})

const MapPage = () => {
  const history = useHistory();

  return (
    <>
    <div className={css(styles.header)}>
      <img src={menu} className={css(styles.menu)} alt='Menu burguer'></img>
    </div>
    <div className={css(styles.mapPage)}>
      <div className={css(styles.maps)}>
        <Map />
      </div>
      <Button
        className={css(styles.button)}
        onClick={() => history.push('scan')}
      >
        Alugue agora
      </Button>
      <Link
        onClick={() => history.push('/info')}
      >
        Como funciona
      </Link>
    </div>
    </>
  )
}

export default MapPage;
