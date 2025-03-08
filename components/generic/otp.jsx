"use client";
import { faToEnNumbers } from "@/utils/numberFormatter";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Text from "./text";

export default function OTPInput({
    length = 6,
    onChange,
    onComplete,
    className = ""
}) {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);
    const completedRef = useRef(false);

    const handleComplete = useCallback(() => {
        if (!completedRef.current) {
            completedRef.current = true;
            onComplete && onComplete(otp.join(""));
        }
    }, [otp, onComplete]);

    useEffect(() => {
        const isComplete = otp.every((digit) => digit !== "");
        if (isComplete) {
            handleComplete();
        } else {
            completedRef.current = false;
        }
    }, [otp, handleComplete]);

    const handleChange = (index, value) => {
        const normalizedValue = faToEnNumbers(value);

        if (/^[0-9]?$/.test(normalizedValue)) {
            const updatedOtp = [...otp];
            updatedOtp[index] = normalizedValue;
            setOtp(updatedOtp);

            onChange && onChange(updatedOtp.join(""));

            if (normalizedValue && index < length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text").slice(0, length);
        if (/^\d+$/.test(pastedData)) {
            const updatedOtp = Array(length).fill("");
            for (let i = 0; i < pastedData.length; i++) {
                updatedOtp[i] = pastedData[i];
            }
            setOtp(updatedOtp);

            onChange && onChange(updatedOtp.join(""));

            const lastFilledIndex = Math.min(pastedData.length - 1, length - 1);
            inputRefs.current[lastFilledIndex].focus();
        }
        e.preventDefault();
    };

    const handleInput = (index, e) => {
        const value = e.target.value;

        if (value.length > 1) {
            const digits = value.split("").slice(0, length);
            const updatedOtp = [...otp];

            digits.forEach((digit, i) => {
                updatedOtp[i] = digit;
            });

            setOtp(updatedOtp);

            onChange && onChange(updatedOtp.join(""));

            const lastFilledIndex = Math.min(digits.length - 1, length - 1);
            inputRefs.current[lastFilledIndex].focus();
        } else {
            handleChange(index, value);
        }
    };

    return (
        <div>
              <Text as="label" size="sm" htmlFor="" className="block mb-1.5">
                کد تایید را وارد کنید
            </Text>
            <div className={`flex dir-ltr ${className}`}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="number"
                    maxLength="1"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onInput={(e) => handleInput(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    autoComplete="one-time-code" // Add this for OTP autofill
                    className="w-full lg:h-11 h-10 border border-solid border-neutral-dark rounded-md mr-2 last:mr-0 text-center text-base text-dim-dark !outline-none focus:!border-primary/70"
                />
            ))}
        </div>
        </div>
    );
}