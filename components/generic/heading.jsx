import clsx from "clsx";

export default function Heading({
  as: Component = "div",
  variant = "h1",
  color = "dim-dark",
  weight = "bold",
  children,
  className = "",
}) {
  const colors = {
    white: "text-white",
    "dim-dark": "text-dim-dark",
    "dim-light": "text-dim-light",
    "dim-lighter": "text-dim-lighter",
  };
  const weights = {
    bold: "font-bold",
    medium: "font-medium",
  };
  const variants = {
    h1: "lg:text-4xl text-2xl",
    h2: "lg:text-3xl text-xl",
    h3: "lg:text-2xl text-lg",
    h4: "lg:text-xl text-md",
    h5: "lg:text-lg text-base",
    h6: "lg:text-md text-sm",
  };
  return (
    <Component
      className={clsx(
        variants[variant],
        colors[color],
        weights[weight],
        className
      )}
    >
      {children}
    </Component>
  );
}
