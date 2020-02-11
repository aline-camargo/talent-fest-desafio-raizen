import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import patinetered from '../images/patinetered.png';
import menu from '../images/menu.png';
import arrow from '../images/arrow.png';
import iconecel from '../images/iconecel.png';
import iconeqrcode from '../images/iconeqrcode.png';
import Button from '../components/Button';

const styles = StyleSheet.create({
    infoPage: {
        display: "flex",
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
    }
})

const Info = () => {
    return(
        <div className={css(styles.infoPage)}>
            <header className={css(styles.infoHeader)}>
                <img src={menu} className={css(styles.menu)}></img>
                <img src={patinetered} className={css(styles.patinete)}></img>
                <h4>Saiba como funciona</h4>
                <img src={arrow} className={css(styles.arrowIcon)}></img>
            </header>
            <section>
                <div>
                    <img src={iconecel} className={css(styles.phoneImg)}></img>
                    <p>Localize o posto com Shell Box mais próximo.</p>
                </div>
                <div>
                    <p>Digitalize o QRCODE do patinete</p>
                    <img src={iconeqrcode} className={css(styles.qrCode)}></img>
                </div>
                <div>
                    <img src={iconecel} className={css(styles.phoneImg)}></img>
                    <p>Alugue e pague com o app</p>
                </div>
                <Button/>
            </section>
        </div>
    )
}

export default Info;