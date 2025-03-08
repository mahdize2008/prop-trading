"use client"

import { useEffect, useState } from "react";

export default function Timer({ initialMinutes, initialSeconds, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(); // Call onComplete only when the timer finishes
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, onComplete]);

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
}