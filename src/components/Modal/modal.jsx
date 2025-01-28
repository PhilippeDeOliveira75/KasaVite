import './modal.scss'
import { IoMdClose } from "react-icons/io"
import { useState, useEffect } from 'react'

function Modal ({ isOpen, onClose, children }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)  // Reset the closing state when the modal is opened
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300) // Delay to match the duration of the closing animation
  }

  if (!isOpen && !isClosing) return null

  return (
    <div className={`modal-overlay ${isClosing ? 'close' : ''}`} onClick={handleClose}>
      <button className="modal-close" onClick={handleClose}>
        <IoMdClose />
      </button>
      {children}
    </div>
  )
}

export default Modal
