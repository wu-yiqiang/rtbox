import '@/styles/Dialog.scss'
import { useState, useEffect, useRef } from 'react'
function Dialog(props: any) {
  const dialogBoxRef = useRef()
  const { open } = props
  const [] = useState()
  useEffect(() => {
    dialogBoxRef.current.showModal();
  }, [open])
  return (
    <dialog className="Dialog" id="dialogBox" ref={dialogBoxRef} aria-modal="true">
      {props.children}
    </dialog>
  )
}

export default Dialog
