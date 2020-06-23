import React from 'react'
import { motion } from 'framer-motion'
import './Modal.scss'


type ModalProps = {
    header: string,
    isToggled: boolean,
    onClick: ()=> void;

}

const variants = {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0, y: '100vh'},
  }

const Modal: React.FunctionComponent<ModalProps> = (props) => {
    return (
        <div>
        <motion.div className="modal"
        initial="close"
        animate={props.isToggled ? "open" : "close"}
        variants={variants}
        transition={{
          ease: 'easeOut'
        }}
      >
      <div className="modal-header">
        <div className="header"><h1>{props.header}</h1></div>
        <div className="btn-container">
            <div className="btn-main" onClick={(e)=>{props.onClick()}}>X</div>
        </div>
      </div>
      </motion.div> 
        
        </div>
    )
}

export default Modal;
