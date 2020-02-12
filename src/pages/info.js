import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import patinetered from '../images/patinetered.png';
import menu from '../images/menu.png';
import iconecel from '../images/iconecel.png';
import iconeqrcode from '../images/iconeqrcode.png';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
  infoPage: {
    display: "flex",
    flexDirection: "column"
  },
  menu: {
    alignSelf: "flex-start",
    width: "10%",
    margin: "10px"
  },
  infoHeader: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(251, 206, 7)",
    width: "100vw",
    height: "40vh",
    alignItems: "center"
  },
  patinete: {
    width: "35%"
  },
  divInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px"
  },
  phoneImg: {
    width: "16%",
    marginRight: "20px"
  },
  qrCode: {
    width: "16%",

  },
  button: {
    border: 'none',
    fontSize: '1.2em',
    marginTop: '1em',
    padding: '1em',
    fontWeight: 'bold',
    color: 'rgb(251, 206, 7)',
    backgroundColor: '#404040',
    width: '85%'
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px"
  },
  paragraph: {
    width: "30vw"
  },
  arrowDown: {
    fontSize: '1.5em'
  },
  title: {
    marginBottom: '0.5em'
  }
})

const Info = () => {
  const history = useHistory();

  return (
    <div className={css(styles.infoPage)}>
      <header className={css(styles.infoHeader)}>
        <img src={menu} className={css(styles.menu)} alt='Menu burguer'></img>
        <img src={patinetered} className={css(styles.patinete)} alt='Logo Patinete'></img>
        <h4 className={css(styles.title)}>Saiba como funciona</h4>
        <FontAwesomeIcon icon={faChevronDown} className={css(styles.arrowDown)} />
        {/* <img src={arrow} className={css(styles.arrowIcon)} alt='Seta para baixo'></img> */}
      </header>
      <section className={css(styles.section)}>
        <div className={css(styles.divInfo)}>
          <img src={iconecel} className={css(styles.phoneImg)} alt='Imagem de um Celular'></img>
          <p className={css(styles.paragraph)}>Localize o posto com Shell Box mais próximo.</p>
        </div>
        <div className={css(styles.divInfo)}>
          <p className={css(styles.paragraph)}>Digitalize o QRCODE do patinete</p>
          <img src={iconeqrcode} className={css(styles.qrCode)} alt='Imagem de um QRCode'></img>
        </div>
        <div className={css(styles.divInfo)}>
          <img src={iconecel} className={css(styles.phoneImg)} alt='Imagem de um Celular'></img>
          <p className={css(styles.paragraph)}>Alugue e pague com o app</p>
        </div>
        <Button
          className={css(styles.button)}
          onClick={() => history.push('/')}
        >
          Encontre um patinete
                </Button>
      </section>
    </div>
  )
}

export default Info;