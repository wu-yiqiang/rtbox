import '@/styles/truntable.scss'
import { useRef, useState } from 'react'
import { LuckyWheel } from '@lucky-canvas/react'
import ResultDialog from './ResultDialog.tsx'
function Turntable() {
  const [blocks] = useState([{ padding: '10px', background: '#869cfa' }])
  const [prizes] = useState([
    { background: '#e9e8fe', fonts: [{ text: '一等奖' }] },
    { background: '#b8c5f2', fonts: [{ text: '二等奖' }] },
    { background: '#e9e8fe', fonts: [{ text: '三等奖' }] },
    { background: '#b8c5f2', fonts: [{ text: '再来一次' }] },
    { background: '#e9e8fe', fonts: [{ text: '谢谢参与' }] },
    { background: '#b8c5f2', fonts: [{ text: '谢谢参与' }] }
  ])
  const [buttons] = useState([
    { radius: '40%', background: '#617df2' },
    { radius: '35%', background: '#afc8ff' },
    {
      radius: '30%',
      background: '#869cfa',
      pointer: true,
      fonts: [{ text: '开始', top: '-10px' }]
    }
  ])
  const [visible, setVisible] = useState(false)
  const [contents, setContents] = useState("")
  const handleClose = () => {
    setVisible(false)
  }
  const myLucky = useRef()
  return (
    <div className="TurnTable">
      <LuckyWheel
        ref={myLucky}
        width="300px"
        height="300px"
        blocks={blocks}
        prizes={prizes}
        buttons={buttons}
        onStart={() => {
          // 点击抽奖按钮会触发star回调
          myLucky.current.play()
          setTimeout(() => {
            const index = (Math.random() * 6) >> 0
            myLucky.current.stop(index)
          }, 2500)
        }}
        onEnd={(prize) => {
          console.log('sdsd', prize.fonts[0].text)
          setVisible(true)
          setContents(prize.fonts[0].text)
        }}
      />
      {visible ? <ResultDialog contents={contents} close={handleClose} /> : null}
    </div>
  )
}

export default Turntable
