import React from 'react';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const QRCodeReader = () => {
  const history = useHistory();

  const handleScan = (result) => {
    if (result) {
      history.push('/goodtrip')
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
    <QrReader
      delay={500}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
  )
}

export default QRCodeReader;
