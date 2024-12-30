import '@/styles/Dialog.scss'
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';
function Toast(props: any) {
  const dialogBoxRef = useRef()
//   const { open } = props
//   const [] = useState()
//   useEffect(() => {
//     dialogBoxRef.current.showModal();
//   }, [open])
  return (
    <dialog className="Dialog" id="dialogBox" ref={dialogBoxRef} aria-modal="true">
      {props.children}
    </dialog>
  )
}

Toast.show = () => {
  const DrawerBox = document.createElement('div');
  document.body.appendChild(DrawerBox);
  ReactDOM.render(
    <Toast
      {...props}
      open
      // 将onClose函数卸载结构props的下方，避免props中的close覆盖关闭操作；
      onClose={(e) => {
        props?.onClose?.(e);
        // 通过卸载渲染节点来关闭；
        ReactDOM.unmountComponentAtNode(DrawerBox);
      }}
    />
  );
}

export default Toast
