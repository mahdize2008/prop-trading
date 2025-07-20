"use client";
import Card from "@/components/generic/card";
import ProfileVerifyStepFour from "@/components/panel/profile/verify/step-four";
import ProfileVerifyStepOne from "@/components/panel/profile/verify/step-one";
import ProfileVerifyStepThree from "@/components/panel/profile/verify/step-three";
import ProfileVerifyStepTwo from "@/components/panel/profile/verify/step-two/step-two";
import ProfileVerifyTopbar from "@/components/panel/profile/verify/top-bar";
import { useState } from "react";

export default function verify() {
  const [step, setStep] = useState(1);
  const show = () => {
    switch (step) {
      case 1:
        return <ProfileVerifyStepOne setStep={() => setStep(2)} />;
      case 2:
        return <ProfileVerifyStepTwo setStep={() => setStep(3)} />;
      case 3:
        return <ProfileVerifyStepThree setStep={() => setStep(4)} />;
      case 4:
        return (
          <ProfileVerifyStepFour
            msg="احراز هویت با موفقیت انجام شد"
            text="از این به بعد میتوانید برداشت‌های خود را ثبت کرده و درآمد خود را دریافت کنید"
            btnText="برو به داشبورد"
            icon="icon-success"
            btnIcon="icon-left-arrow"
            btnLink="/panel"
          />
        );

      default:
        return <ProfileVerifyStepOne />;
    }
  };
  return (
    <Card color="neutral-dark" className="w-[630px] mx-auto p-6">
      <ProfileVerifyTopbar className="mb-10" active={step} />
      {show()}
    </Card>
  );
}
