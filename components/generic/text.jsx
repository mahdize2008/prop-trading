import clsx from "clsx"

export default function Text({
    as: Component = 'div',
    size = 'base', color = 'dim', weight = 'medium', children, className = '', ...props }) {
    const colors = {
        'dim': 'text-dim',
        'dim-dark': 'text-dim-dark',
        'info': 'text-info-dark',
        'danger': 'text-danger-dark',
        'success': 'text-success-dark',
        'warning': 'text-warning-dark',
        'primary': 'text-primary',
    }
    const weights = {
        medium: 'font-medium',
        bold: 'font-bold',
    }
    const sizes = {
        '2xl': 'lg:text-2xl text-xl',
        xl: 'lg:text-xl text-lg',
        lg: 'lg:text-lg text-md',
        md: 'lg:text-md text-base',
        base: 'lg:text-base text-sm',
        sm: 'lg:text-sm text-xs',
        xs: 'text-xs'
    }
    return (
        <Component className={clsx(sizes[size], colors[color], weights[weight], className)} {...props}>
            {children}
        </Component>
    )
}