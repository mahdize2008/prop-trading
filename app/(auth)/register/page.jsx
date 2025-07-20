'use client'

import AuthMassage from "@/components/auth/layout/auth-massage";
import RegisterStepOne from "@/components/auth/register/step-one";
import { useState } from "react";

export default function Register(){

    const [step , setStep]=useState('stepOne')

    return(
        <div className="w-[630px]">
            {
                step==="stepOne" && <RegisterStepOne setStep={()=>setStep('registerSuccessful')}/>
            }
            {
                step==="registerSuccessful" && <AuthMassage headerTitle="ثبت نام در نئوپراپ" icon="icon-shield" msg="ثبت نام با موفقیت انجام شد" text="لینک تایید ایمیل برایتان ارسال شده است. لطفا ایمیل خود را بررسی کنید." btnText="ورود با رمز عبور" btnIcon="icon-left-arrow" btnLink="/login"/>
            }
        </div>
    )
}