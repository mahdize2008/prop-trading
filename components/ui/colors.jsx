import clsx from "clsx";

export default function UiColors() {
  const colors = {
    primary: ["bg-primary-light", "bg-primary", "bg-primary-dark"],
    success: ["bg-success-light", "bg-success", "bg-success-dark"],
    warning: ["bg-warning-light", "bg-warning", "bg-warning-dark"],
    danger: ["bg-danger-light", "bg-danger", "bg-danger-dark"],
    info: ["bg-info-light", "bg-info", "bg-info-dark"],
    neutral: [
      "bg-neutral-light",
      "bg-neutral",
      "bg-neutral-dark",
      "bg-neutral-darker",
    ],
    dim: ["bg-dim-lighter", "bg-dim-light", "bg-dim", "bg-dim-dark"],
  };

  return (
    <>
      <div>
        {Object.keys(colors).map((item,key) => (
          <div className="flex flex-wrap -m-2" key={key}>
            {colors[item].map((color, index) => (
            <div key={index} className="w-1/4 p-2 text-dim text-md">
              <div className={clsx("h-10 rounded-md", color)}></div>
              {color}
            </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
