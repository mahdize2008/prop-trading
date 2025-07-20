import clsx from "clsx"

export default function Text({
    as: Component = 'div',
    size = 'base', color = 'dim-dark', weight = 'medium', children, className = '', ...props }) {
    const colors = {
        'dim-dark': 'text-dim-dark',
        'dim-light': 'text-dim-light',
        'dim-lighter': 'text-dim-lighter',
        'dim': 'text-dim',
        'info': 'text-info',
        'danger': 'text-danger',
        'success': 'text-success',
        'warning': 'text-warning',
        'primary': 'text-primary',
    }
    const weights = {
        light: 'font-light',
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