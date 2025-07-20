import clsx from "clsx";

export default function Card({
  children,
  as: Component ="div",
  color = "neutral",
  href,
  className = "",
}) {
  const colors = {
    transparent: "bg-transparent border-none text-white",
    primary: "bg-primary-light border-primary-dark text-white",
    info: "bg-info-light border-info-dark text-info",
    success: "bg-success-light border-success-dark text-success",
    danger: "bg-danger-light border-danger-dark text-danger",
    warning: "bg-warning-light border-warning-dark text-warning",
    'neutral-dark': "bg-neutral-dark border-neutral-light text-white",
    neutral: "bg-neutral border-neutral-light text-white",
  };
  const baseClasses = "block border rounded-lg text-sm p-4";
  return (
    <Component href={href?.length && href} className={clsx(baseClasses, colors[color], className)}>
      {children}
    </Component>
  );
}
