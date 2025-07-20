'use client'

import RegisterSetNewPassword from "@/components/auth/forget/set-new-password";
import AuthMassage from "@/components/auth/layout/auth-massage";
import { useState } from "react";

export default function Login(){

    const [step , setStep]=useState('stepOne')

    return(
        <div className="w-[630px]">
            {
                step==="stepOne" && <RegisterSetNewPassword setStep={()=>setStep('setPasswordSuccessfull')}/>
            }
            {
                step==="setPasswordSuccessfull" && <AuthMassage headerTitle="بازنشانی رمز عبور" icon="icon-success" msg="رمز عبور جدید با موفقیت ساخته شد." text="می‌توانید وارد حساب خود شوید." btnText="ورود با رمز عبور" btnIcon="icon-left-arrow" btnLink="/login"/>
            }
        </div>
    )
}