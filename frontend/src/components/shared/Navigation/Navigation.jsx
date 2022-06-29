import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.css"
const Navigation = () => {
    const brandStyle={
        color: "#fff",
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display:'flex',
        allignItems: 'center'
    }
    const logoText={
        marginLeft: '8px'
    }
  return (
    <nav className={`${styles.navbar} container`}>
        <Link to ="/" style={brandStyle}>
            <img src="/images/Hand.png" alt="Hand Logo">
            </img>
            <span style={logoText}>Coders House</span>
        </Link>
    </nav>
  )
}

export default Navigation