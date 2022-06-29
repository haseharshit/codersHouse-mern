import React from 'react'
import styles from "./Home.module.css"
import Card from '../../components/shared/Card/Card'
import {Link, useNavigate} from "react-router-dom"
import Button from '../../components/shared/Button/Button'
const Home = () => {
    const Navigate= useNavigate();
    const styleLink={
        color: "#0077ff",
        fontWeight: 'bold',
        textDecoration: "none",
        marginLeft: '10px'
    }
    const handle =()=>{

        console.log("Handling On click event!");
        Navigate("/register")
    }
  return (
    <div className={styles.cardWrapper}>
        <Card title="Welcome to CodersHouse" icon="Hand">
        <p className={styles.text}>Just a bunch of line to define what is actually pretty obvious from the place that you have redirected to.</p>
       <div>
       <Button text="Get Your Username" onClick={handle}></Button>
       </div>
       
        <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
            <Link style={styleLink} to="/login">Login in</Link>
        </div>
        </Card>

    </div>

  )
}

export default Home