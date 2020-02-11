import React from 'react';
import checked1 from '../images/checked1.png';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    checkedPage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(251, 206, 7)",
        width: "100vw",
        height: "100vh"
    },
    iconCheck: {
        width: "50%"
    }

})

const Checked = () => {
    return(
        <div className={css(styles.checkedPage)}>
            <img src={checked1} className={css(styles.iconCheck)}></img>
            <h1>BOA VIAGEM!</h1>
        </div>
    )
}

export default Checked;