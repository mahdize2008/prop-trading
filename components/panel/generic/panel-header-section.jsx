import Heading from "@/components/generic/heading";
import clsx from "clsx";

export default function PanelHeaderSection({ children, className = "", leftSide , badge ,border=true , shape=true , size="h1", ...props }) {
  return (
    <div
      className={clsx(
        "flex items-center ",
        {'pb-2 border-b border-b-neutral-light':border},
        className
      )}
      {...props}
    >
      {
        shape &&
      <div className="w-0.5 h-9 bg-primary ml-3.5"></div>
      }
      <Heading variant={size} className="ml-4">
        {children}
      </Heading>
      {leftSide}
    </div>
  );
}
