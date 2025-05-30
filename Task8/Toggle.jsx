import React, { useState } from 'react'

const Toggle = () => {
    let [showMessage, setShowMessage] = useState(false);
    let toggleMessage = () => {
    setShowMessage(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleMessage}>{showMessage ? 'Hide' : 'Show'}</button>
{showMessage && <h1>Welcome to React!</h1>}
    </div>
  )
}

export default Toggle