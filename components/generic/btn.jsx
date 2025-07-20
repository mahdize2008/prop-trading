"use client";

import clsx from "clsx";

export default function Btn({
  children,
  as: Component = "button",
  color = "primary",
  size = "base",
  variant = "normal",
  loading = false,
  square = false,
  rounded = false,
  disabled = false,
  icon = "",
  iconPlace = "right",
  href,
  className = "",
  ...props
}) {
  const colors = {
    normal: {
      primary: "bg-primary text-white",
      success: "bg-success text-white",
      info: "bg-info text-white",
      warning: "bg-warning text-white",
      danger: "bg-danger text-white",
      dim: "bg-dim text-neutral-dark",
      "neutral-light": "bg-neutral-light text-dim",
    },
    text: {
      primary: "text-primary",
      success: "text-success",
      info: "text-info",
      warning: "text-warning",
      danger: "text-danger",
      dim: "text-dim",
      "neutral-light": "text-neutral-light",
    },
    outline: {
      primary: "text-primary border-2 border-primary",
      success: "text-success border-2 border-success",
      info: "text-info border-2 border-info",
      warning: "text-warning border-2 border-warning",
      danger: "text-danger border-2 border-danger",
      dim: "text-dim border-2 border-dim",
      "neutral-light": "text-dim border-2 border-neutral-light",
    },
    lightness: {
      primary: "text-primary bg-primary-light",
      success: "text-success bg-success-light",
      info: "text-info bg-info-light",
      warning: "text-warning bg-warning-light",
      danger: "text-danger bg-danger-light",
      dim: "text-neutral-dark bg-dim-lighter",
      "neutral-light": "text-dim bg-neutral",
    },
    "outline-lightness": {
      primary: "text-primary border-2 border-primary-light",
      success: "text-success border-2 border-success-light",
      info: "text-info border-2 border-info-light",
      warning: "text-warning border-2 border-warning-light",
      danger: "text-danger border-2 border-danger-light",
      dim: "text-dim border-2 border-dim-lighter",
      "neutral-light": "text-dim border-2 border-neutral",
    },
    gradient: {
      primary: "text-white bg-primary-gradient border-2 border-white/20",
    },
  };
  const baseClasses = "flex cursor-pointer items-center w-fit relative px-4 rounded-md font-bold transition-all";
  const btnSize = {
    lg: "lg:h-14 h-12 lg:text-lg text-md",
    md: "lg:h-12 h-11 lg:text-md text-base",
    base: "lg:h-11 h-10 lg:text-base text-sm",
    sm: "lg:h-10 h-9 lg:text-sm text-xs",
    xs: "lg:h-9 h-8 lg:text-sm text-xs",
  };
  const iconSizes = {
    lg: "lg:text-lg text-md",
    md: "lg:text-md text-base",
    base: "lg:text-base text-sm",
    sm: "lg:text-sm text-xs",
    xs: "text-xs",
  };
  const variants = {
    normal: "",
    text: "!bg-transparent !h-auto !p-0",
  };
  const squareClasses = "aspect-square !p-0 justify-center";
  const disabledClass =
    "opacity-20 pointer-events-none cursor-not-allowed";
  const loadingClass = "!text-transparent";
  const roundedClass = "!rounded-full";

  return (
    <Component
      href={href?.length && href}
      className={clsx(
        baseClasses,
        colors[variant][color],
        btnSize[size],
        variants[variant],
        className,
        loading ? loadingClass : "",
        square ? squareClasses : "",
        rounded ? roundedClass : "",
        disabled ? disabledClass : ""
      )}
      {...props}
    >
      {loading && (
        <span className="w-5 h-5 border-[3px] border-solid border-r-white border-b-white border-white/10 rounded-full block animate-spin absolute m-auto"></span>
      )}
      {icon && iconPlace === "right" && (
        <i
          className={clsx(icon, iconSizes[size], "ml-2", square && "!m-0")}
        ></i>
      )}
      {children}
      {icon && iconPlace === "left" && (
        <i
          className={clsx(icon, iconSizes[size], "mr-2", square && "!m-0")}
        ></i>
      )}
    </Component>
  );
}
