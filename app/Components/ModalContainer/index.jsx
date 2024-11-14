'use client'

import { Button } from "@mui/material";
import classes from "./styles.module.scss"
import CloseIcon from '@mui/icons-material/Close';

const ModalContainer = ({children, title, handleClose, handleSubmit}) => {

  return (
    <div className={classes.container} onClick={handleClose}>
      <div className={classes.content} onClick={(e)=>e.stopPropagation()}>
        <div className={classes.title}>

          <p>{title}</p>
          <CloseIcon 
          className={classes.icon} 
          onClick={handleClose}
          />
        </div>
        <div className={classes.body}>
          {children}
        </div>
        <div className={classes.footer}>
          <Button onClick={handleClose}>انصراف</Button>
          <Button onClick={handleSubmit}>ثبت</Button>
        </div>
      </div>
    </div>
  )
}

export default ModalContainer;