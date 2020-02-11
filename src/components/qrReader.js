import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
// import { StyleSheet, css } from 'aphrodite/no-important';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// const styles = StyleSheet.create({
//   background: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     background: 'rgb(251, 206, 7)',
//     height: '83vh',
//     width: '100vw'
//   },
//   header: {
//     background: 'white',
//     height: '17vh',
//     display: 'flex',
//     alignItems: 'center'
//   },
//   title: {
//     marginTop: '3em',
//     color: '#404040'
//   },
//   icon: {
//     fontSize: '2.5em',
//     color: '#404040',
//     marginLeft: '0.3em',
//   },
//   text: {
//     fontSize: '1.3em',
//     marginLeft: '0.5em',
//     color: '#404040'
//   }
// })

const QRCodeReader = () => {
  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setResult(result)
    }
  }
  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    // <>
    //   <div className={css(styles.header)}>
    //     <FontAwesomeIcon icon={faChevronLeft} className={css(styles.icon)}/>
    //     <p className={css(styles.text)}>Voltar</p>
    //   </div>
    //   <div className={css(styles.background)}>
    //   <h2 className={css(styles.title)}>Escaneie o QRCode</h2>
        <QrReader
          delay={500}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
    //   </div>
    // </>
  )
}

export default QRCodeReader;
