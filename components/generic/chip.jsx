import clsx from "clsx"

export default function Chip({
    children,
    variant = 'filled',
    color = 'success',
}) {
    const colors = {
        filled: {
            info: 'text-white bg-info-dark',
            warning: 'text-white bg-warning-dark',
            danger: 'text-white bg-danger-dark',
            success: 'text-white bg-success-dark',
        },
        lightness: {
            info: 'text-info-dark bg-info-light',
            warning: 'text-warning-dark bg-warning-light',
            danger: 'text-danger-dark bg-danger-light',
            success: 'text-success-dark bg-success-light',
        }
    }
    const baseClasses = ' px-3 py-1 font-semibold inline-block relative transition-all text-xs rounded-full'
    return (
        <span className={clsx(baseClasses, colors[variant][color])}>
            {children}
        </span>
    )
}