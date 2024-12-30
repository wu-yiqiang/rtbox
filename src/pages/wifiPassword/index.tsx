import { useMemo, useRef, useState, useEffect } from 'react';
import {isWifiConnection} from '@/utils/network'
import '@/styles/WifiPassword.scss';
function WifiPassword() {
    useEffect(() => {
      if (!isWifiConnection()) // Toast.error('连接的网络环境不是wifi网络，请连接wifi网络')
    }, [])
  return (<div className="WifiPassword">
    WifiPassword
  </div>);
}

export default WifiPassword;
