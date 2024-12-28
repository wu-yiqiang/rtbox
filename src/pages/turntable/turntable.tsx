import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '@/styles/turntable.scss'

function Turntable() {
  const [count, setCount] = useState(0)

  return (
    <>
      转盘
      {count}
    </>
  )
}

export default withRouter(Turntable)
