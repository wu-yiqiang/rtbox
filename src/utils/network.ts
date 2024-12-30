export const isConnectioned = () => {
  if(navigator?.connection) return true
  return false
}

export const isWifiConnection = () => {
  if(!isConnectioned()) return false
  if(navigator?.connection?.type && navigator.connection.type === 'wifi') return true;
  return false
}