"use client"

import clsx from "clsx";
import Btn from "./btn";
import { useEffect, useState } from "react";

export default function Pagination({
  total = 1,
  current = 1,
  reFetch,
  className,
}) {
  const [totalPages, setTotalPages] = useState([1]);
  useEffect(() => {
    const totalArray = [];
    Array.from({ length: total }, (_, i) => i + 1).map((num) =>
      totalArray.push(num)
    );

    setTotalPages(totalArray);
    if (total >= 5) {
      if (current >= 3) {
        setTotalPages([1, current - 1, current, current + 1, total]);
      } else {
        setTotalPages([1, 2, 3, total - 1, total]);
      }
    }
  }, []);

  const handlePrev = () => {
    if (current != 1) {
      reFetch(current - 1);
    }
  };
  const handleNext = () => {
    if (current != total) {
      reFetch(current + 1);
    }
  };
  

  return (
    <ul className={clsx("flex items-center", className)}>
      <Btn
        as="li"
        disabled={current===1}
        className="ml-2 last:ml-0"
        square
        rounded
        size="sm"
        onClick={handlePrev}
      >
        <i className="icon-right"></i>
      </Btn>

      {totalPages.map((item, index) => (
        <Btn
          as="li"
          className="ml-2 last:ml-0"
          square
          key={index}
          color="neutral-light"
          disabled={item===current}
          rounded
          size="sm"
          onClick={() => reFetch(item)}
        >
          {item}
        </Btn>
      ))}
      <Btn
        as="li"
        className="ml-2 last:ml-0"
        square
        rounded
        size="sm"
        onClick={handleNext}
        disabled={current===total}
      >
        <i className="icon-left"></i>
      </Btn>
    </ul>
  );
}
