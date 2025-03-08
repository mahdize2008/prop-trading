import clsx from "clsx"

export default function Alert({ variant = 'filled', color = "info", children, className = '', hasIcon = true  }) {
    const colors = {
        filled: {
            info: 'bg-info-dark text-white',
            success: 'bg-success-dark text-white',
            danger: 'bg-danger-dark text-white',
            warning: 'bg-warning-dark text-white',
        },
        lightness: {
            info: 'bg-info-light text-info-dark border-info-dark border-r-[3px] border-solid border-opacity-30',
            success: 'bg-success-light text-success-dark border-success-dark border-r-[3px] border-solid border-opacity-30',
            danger: 'bg-danger-light text-danger-dark border-danger-dark border-r-[3px] border-solid border-opacity-30',
            warning: 'bg-warning-light text-warning-dark border-warning-dark border-r-[3px] border-solid border-opacity-30',
        },
        text: {
            info: 'text-info-dark !p-0',
            success: 'text-success-dark !p-0',
            danger: 'text-danger-dark !p-0',
            warning: 'text-warning-dark !p-0',
        },
    }
    const icons = {
        info: 'icon-info-circle',
        success: 'icon-check-circle',
        danger: 'icon-close-circle',
        warning: 'icon-warning-circle',
    }
    const baseClasses = "p-3 rounded-md text-sm flex items-center"
    return (
        <div className={clsx(baseClasses, colors[variant][color], className)}>
            {
                hasIcon && (
                    <i className={clsx(icons[color], 'ml-2',variant === 'text' ? 'text-base' : 'text-md')}></i>
                )
            }
          {children}
        </div>
    )
}