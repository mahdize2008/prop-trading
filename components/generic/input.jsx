import clsx from "clsx";
import Text from "./text";
import Alert from "./alert";

export default function Input({
    label, leftSide, rightSide, leftSideLabel, wrapClasses, showMsg = false, msgType = 'danger', msg = null, ...props
}) {
    const generateBorderColor = {
        danger: '!border-danger-dark',
        info: '!border-info-dark',
        success: '!border-success-dark',
        warning: '!border-warning-dark',
    }
    return (
        <div className={wrapClasses}>
            <div className="w-full mb-1.5 flex items-center">
                <Text as="label" size="sm" htmlFor="" className="block">
                    {label}
                </Text>
                {leftSideLabel}
            </div>
            <div className={clsx(
                'w-full lg:h-11 h-10 border border-solid border-neutral-dark rounded-md flex items-center  focus-within:!border-primary/70',
                showMsg && generateBorderColor[msgType]
            )}>
                {
                    rightSide && (
                        <div className="pr-3 text-sm text-dim">
                            {rightSide}
                        </div>
                    )
                }
                <input type="text" className="w-full h-full bg-transparent border-0 outline-none shadow-none px-3 text-base text-dim-dark" {...props} />
                {
                    leftSide && (
                        <div className="pl-3 text-sm text-dim">
                            {leftSide}
                        </div>
                    )
                }
            </div>
            {
                showMsg && (
                    <Alert color={msgType} variant="text" className="mt-2">
                        {msg}
                    </Alert>
                )
            }
        </div>
    )
}