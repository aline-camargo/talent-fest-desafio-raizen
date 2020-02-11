import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

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
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  )
}

export default QRCodeReader;
