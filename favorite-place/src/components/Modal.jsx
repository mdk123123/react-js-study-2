import { useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({open, children, onClose }) {
  const dialog = useRef();
  
  useEffect(()=>{
    if(open) {
      dialog.current.show();
    }
    else {
      dialog.current.close();
    }
    
  }, [open])

  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {open? children: null//for timer not set here
      }
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
