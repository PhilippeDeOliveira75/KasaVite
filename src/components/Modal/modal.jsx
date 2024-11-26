import './modal.scss'
import { IoMdClose } from "react-icons/io"

const Modal = ({ isOpen, onClose, children }) => {
    
  if (!isOpen) return null

  const handleClose = () => {
    onClose()
  }

  return (

    <div className="modal-overlay" onClick={handleClose}>
      <button className="modal-close" onClick={handleClose}>
        <IoMdClose />
      </button>
      {children}
    </div>

  )

}

export default Modal
