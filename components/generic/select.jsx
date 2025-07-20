"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import Text from "./text";
import "./select.css";
import clsx from "clsx";

export default function SelectBox({
  label,
  options,
  formatOption,
  leftSideLabel,
  className = "",
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (options.length > 0) {
      setSelectedOption(options[0]); // Set first option as default when options load
    }
  }, [options]);

  if (!isClient) return null; // Prevent SSR rendering

  return (
    <div className={clsx("select-wrap", className)}>
      <div className="w-full mb-1.5 flex items-center justify-between">
        <Text as="label" size="sm" htmlFor="" className="block">
          {label}
        </Text>
        {leftSideLabel}
      </div>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        getOptionLabel={(option) =>
          formatOption ? formatOption(option) : option.label
        }
        formatOptionLabel={(option) =>
          formatOption ? formatOption(option) : option.label
        }
        getOptionValue={(option) => option.value} // Ensures unique values
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
}
