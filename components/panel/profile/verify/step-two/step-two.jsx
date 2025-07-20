import { useState } from "react";
import ProfileVerifySlideOne from "./slide-one";
import ProfileVerifySlideTwo from "./slide-two";

export default function ProfileVerifyStepTwo({ setStep }) {

  const [slide , setSlide]=useState('slide-one')
  
  switch (slide) {
    case 'slide-one':
      return <ProfileVerifySlideOne setSlide={()=>setSlide('slide-two')}/>
    case 'slide-two':
      return <ProfileVerifySlideTwo setStep={setStep}/>
  
    default:
      <ProfileVerifySlideOne setSlide={()=>setSlide('slide-two')}/>
  }
}
