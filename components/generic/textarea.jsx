import clsx from "clsx";
import Text from "./text";
import Alert from "./alert";

export default function Textarea({
    label, leftSide, rightSide, leftSideLabel, wrapClasses, showMsg = false, msgType = 'danger', msg = null , ...props
}) {
    const generateBorderColor = {
        danger: '!border-danger',
        info: '!border-info',
        success: '!border-success',
        warning: '!border-warning',
        primary: '!border-primary',
    }
    return (
        <div className={wrapClasses}>
            <div className="w-full mb-1.5 flex items-center">
                <Text as="label" size="sm" htmlFor="" color="dim-light" className="block">
                    {label}
                </Text>
                {leftSideLabel}
            </div>
            <div className={clsx(
                'w-full lg:h-32 h-24 border border-solid border-neutral-light rounded-base flex items-center focus-within:!border-primary/70',
                showMsg && generateBorderColor[msgType]
            )}>
                {
                    rightSide && (
                        <div className="pr-3 text-sm text-dim-lighter">
                            {rightSide}
                        </div>
                    )
                }
                <textarea type="text" className="w-full h-full bg-transparent border-0 outline-none shadow-none p-3 text-primary placeholder:text-dim-lighter text-sm font-medium" {...props} />
                {
                    leftSide && (
                        <div className="pl-3 text-sm text-dim-lighter">
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