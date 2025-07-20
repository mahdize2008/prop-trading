import clsx from "clsx"

export default function Alert({ variant = 'filled', color = "info", children, className = '', hasIcon = true  }) {
    const colors = {
        filled: {
            info: 'bg-info text-white',
            success: 'bg-success text-white',
            danger: 'bg-danger text-white',
            warning: 'bg-warning text-white',
        },
        lightness: {
            info: 'bg-info-light text-white',
            success: 'bg-success-light text-white',
            danger: 'bg-danger-light text-white',
            warning: 'bg-warning-light text-white',
        },
        text: {
            info: 'text-info !p-0',
            success: 'text-success !p-0',
            danger: 'text-danger !p-0',
            warning: 'text-warning !p-0',
        },
    }
    const icons = {
        name:{
            info: 'icon-info-circle',
            success: 'icon-check-circle',
            danger: 'icon-close-circle',
            warning: 'icon-info-circle',
        },
        wrapper:{
            filled:{
                info: 'w-9 h-9 text-white bg-black/10',
                success: 'w-9 h-9 text-white bg-black/10',
                danger: 'w-9 h-9 text-white bg-black/10',
                warning: 'w-9 h-9 text-white bg-black/10',
            },
            lightness:{
                info: 'w-9 h-9 text-info-light bg-info',
                success: 'w-9 h-9 text-success-light bg-success',
                danger: 'w-9 h-9 text-danger-light bg-danger',
                warning: 'w-9 h-9 text-warning-light bg-warning',
            },
            text:{
                info: '',
                success: '',
                danger: '',
                warning: '',
            },
        },
    }
    const baseClasses = "flex items-center p-3 rounded-md text-sm"
    return (
        <div className={clsx(baseClasses, colors[variant][color], className)}>
            {
                hasIcon && (
                    <div className={clsx("flex items-center justify-center shrink-0 rounded-full ml-2",icons['wrapper'][variant][color])}>
                        <i className={clsx(icons['name'][color],variant === 'text' ? 'text-base' : 'text-md')}></i>
                    </div>
                )
            }
          {children}
        </div>
    )
}