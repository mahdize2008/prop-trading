'use client'

import ForgetStepOne from "@/components/auth/forget/step-one";
import AuthMassage from "@/components/auth/layout/auth-massage";
import { useState } from "react";

export default function Forget(){

    const [step , setStep]=useState('stepOne')

    return(
        <div className="w-[630px]">
            {
                step==="stepOne" && <ForgetStepOne setStep={()=>setStep('sendEmail')}/>
            }
            {
                step==="sendEmail" && <AuthMassage headerTitle="بازیابی رمز عبور" icon="icon-massage" msg="لینک ارسال شد" text="لینک بازیابی رمز عبور به ایمیل شما ارسال شده است. لطفا ایمیل خود را بررسی کنید." btnText="ورود با رمز عبور" btnIcon="icon-left-arrow" btnLink="/login"/>
            }
        </div>
    )
}