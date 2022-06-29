import React, { useState } from 'react'
import styles from "./Register.module.css"
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail"
import StepOTP from "../Steps/StepOTP/StepOTP"
import StepName from "../Steps/StepName/StepName"
import StepAvatar from "../Steps/StepAvatar/StepAvatar"
import StepUsername from "../Steps/StepUsername/StepUsername"
const Register = () => {
    const steps={
        1: StepPhoneEmail,
        2: StepOTP,
        3: StepName,
        4: StepAvatar,
        5: StepUsername,
    }
    const onNext= ()=>{
        console.log("Here\n");
        setStep(step+1);
    }
    const [step, setStep] =useState(1);
    const Step= steps[step];
  return (
    <div>
        <Step onNext={onNext}></Step>
    </div>
  )
}

export default Register