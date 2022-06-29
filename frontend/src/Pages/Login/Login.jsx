import React from 'react'
import { useState } from 'react'
import styles from "./Login.module.css"
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail"
import StepOTP from "../Steps/StepOTP/StepOTP"
const steps={
    1: StepPhoneEmail,
    2: StepOTP
}
const Login = () => {
    const onNext=()=>{
        setStep(step+1);
    }
    const [step, setStep]= useState(1);
    const Step= steps[step];
  return (
    <Step onNext={onNext}></Step>
  )
}

export default Login