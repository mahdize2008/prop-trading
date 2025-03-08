import clsx from "clsx"

export default function Btn({
    children,
    as: Component = 'button',
    size = 'base',
    color = 'primary',
    variant = 'normal',
    className = '',
    disabled = false,
    loading = false,
    square = false,
    rounded = false,
    icon = '',
    iconPlace = 'right',
    ...props
}) {
    const colors = {
        normal: {
            primary: 'bg-primary text-white',
            secondary: 'bg-secondary text-white',
            dim: 'bg-dim  text-white',
            info: 'bg-info  text-white',
            warning: 'bg-warning  text-white',
            danger: 'bg-danger  text-white',
            success: 'bg-success  text-white',
        },
        text: {
            primary: 'text-primary',
            secondary: 'text-secondary',
            dim: 'text-dim',
            info: 'text-info',
            warning: 'text-warning',
            danger: 'text-danger',
            success: 'text-success',
        },
        lightness: {
            primary: 'text-primary bg-primary-light',
            secondary: 'text-secondary bg-secondary-light',
            dim: 'text-dim bg-dim-light',
            info: 'text-info bg-info-light',
            warning: 'text-warning bg-warning-light',
            danger: 'text-danger bg-danger-light',
            success: 'text-success bg-success-light',
        },
        outline: {
            primary: 'text-primary border border-2 border-primary',
            secondary: 'text-secondary border border-2 border-secondary',
            dim: 'text-dim border border-2 border-dim',
            info: 'text-info border border-2 border-info',
            warning: 'text-warning border border-2 border-warning',
            danger: 'text-danger border border-2 border-danger',
            success: 'text-success border border-2 border-success',
        },
        'outline-lightness': {
            primary: 'text-primary border border-2 border-primary-light',
            secondary: 'text-secondary border border-2 border-secondary-light',
            dim: 'text-dim border border-2 border-dim-light',
            info: 'text-info border border-2 border-info-light',
            warning: 'text-warning border border-2 border-warning-light',
            danger: 'text-danger border border-2 border-danger-light',
            success: 'text-success border border-2 border-success-light',
        },
    }
    const baseClasses = ' px-4 rounded-md font-bold flex items-center justify-center relative transition-all'
    const sizes = {
        lg: 'lg:h-14 h-12 lg:text-lg text-md',
        md: 'lg:h-12 h-11 lg:text-md text-base',
        base: 'lg:h-11 h-10 lg:text-base text-sm',
        sm: 'lg:h-10 h-9 lg:text-sm text-xs',
        xs: 'lg:h-9 h-8 lg:text-sm text-xs',
    }
    const iconSizes = {
        lg: 'lg:text-xl text-lg',
        md: 'lg:text-lg text-md',
        base: 'lg:text-md text-base',
        sm: 'lg:text-base text-sm',
        xs: 'lg:text-sm text-xs',
    }
    const variants = {
        normal: '',
        text: '!h-auto !bg-transparent !p-0',
    }
    const squareClasses = 'aspect-square !p-0'
    const disabledClass = "!bg-neutral-light !border-neutral-light !text-neutral-dark pointer-events-none cursor-not-allowed"
    const loadingClass = "!text-transparent"
    const roundedClass = "!rounded-full"
    return (
        <Component className={clsx(
            baseClasses , colors[variant][color], sizes[size], variants[variant], className,
            disabled ? disabledClass : '',
            loading ? loadingClass : '',
            square ? squareClasses : '',
            rounded ? roundedClass : '',
        )} {...props}>
            {
                loading && (
                    <span
                        className="w-5 h-5 border-[3px] border-solid border-r-white border-b-white border-white/10 rounded-full block animate-spin absolute m-auto"
                    ></span>
                )
            }
            {
                (icon && iconPlace === 'right') && (
                    <i className={clsx(icon , iconSizes[size] ,'ml-2' , square && '!m-0')}></i>
                )
            }
            {children}
            {
                (icon && iconPlace === 'left') && (
                    <i className={clsx(icon , iconSizes[size] ,'mr-2' , square && '!m-0')}></i>
                )
            }
        </Component>
    )
}