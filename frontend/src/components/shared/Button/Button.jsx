import React from 'react'
import styles from "./Button.module.css"
const Button = ({text, onClick}) => {
  return (
   
            <button className={styles.button} onClick={onClick}>
                <span style={{marginRight:"10px"}}>{text}</span>
                <img src="/images/Arrow.png" alt="Arrow Logo" />
            </button>
        
  )
}

export default Button