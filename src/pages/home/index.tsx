import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/styles/Home.scss';
function App() {
  const navigate = useNavigate();
  function handleTurntable() {
    navigate('/turntable');
  }
  function handleDice() {
    navigate('/dice');
  }
  function handleWifiPassword() {
    navigate('/wifipassword');
  }

  return (<div className="Home">
    <div className="turnTab" onClick={handleTurntable}>转一转</div>
    <div className="turnTab" onClick={handleDice}>Dice</div>
    <div className="turnTab" onClick={handleWifiPassword}>wifi</div>
  </div>);
}

export default App;
