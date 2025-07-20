import clsx from "clsx";

export default function Chip({
  children,
  variant = "filled",
  color = "success",
  outline = false,
  className="",
  icon,
}) {
  const colors = {
    filled: {
      info: "text-info-light bg-info",
      warning: "text-warning-light bg-warning",
      danger: "text-danger-light bg-danger",
      success: "text-success-light bg-success",
      primary: "text-primary-light bg-primary",
      "neutral-light": "text-dim-dark bg-neutral-light",
    },
    lightness: {
      info: "text-info bg-info-light",
      warning: "text-warning bg-warning-light",
      danger: "text-danger bg-danger-light",
      success: "text-success bg-success-light",
      primary: "text-primary bg-primary-light",
      "neutral-light": "text-dim bg-neutral",
    },
    outline: {
      info: "text-info border border-info",
      warning: "text-warning border border-warning",
      danger: "text-danger border border-danger",
      success: "text-success border border-success",
      primary: "text-primary border border-primary",
      "neutral-light": "text-dim-dark border border-neutral-light",
    }
  };
  const baseClasses =
    "flex items-center inline-block relative w-fit px-3 py-1 rounded-full text-xs font-semibold transition-all";
  return (
    <span
      className={clsx(baseClasses,className,  colors[variant][color])}
    >
      {icon && <i className={`${icon} text-xs-plus ml-2`}></i>}
      {children}
    </span>
  );
}
