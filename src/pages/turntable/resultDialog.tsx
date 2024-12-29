import '@/styles/ResultDialog.scss'
import Dialog from '@/components/Dialog'
import { useState, useEffect } from 'react'
function ResultDialog(props: any) {
  const { contents, close } = props
  const [] = useState()
  useEffect(() => {
  }, [])
  const handleClose = () => {
    close(false)
  }
  return (
    <Dialog>
      <div className="ResultDialog">
        <div className="title">结果</div>
        <div className="contents">{contents}</div>
        <div className="close" onClick={handleClose}>关闭</div>
      </div>
    </Dialog>
  )
}

export default ResultDialog
