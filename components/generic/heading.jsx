import clsx from "clsx"

export default function Heading({ 
    as: Component = 'div',
    variant = 'h1', color = 'dim-dark', weight = 'bold', children, className = '', ...props 
}) {
    const colors = {
        'dim-dark': 'text-dim-dark',
        'dim': 'text-dim',
    }
    const weights = {
        bold: 'font-bold',
        medium: 'font-medium',
    }
    const variants = {
        h1: 'lg:text-8xl text-4xl',
        h2: 'lg:text-7xl text-3xl',
        h3: 'lg:text-6xl text-2xl',
        h4: 'lg:text-5xl text-xl',
        h5: 'lg:text-4xl text-lg',
        h6: 'lg:text-3xl text-md'
    }
    return (
        <Component className={clsx(variants[variant], colors[color], weights[weight], className)} {...props}>
            {children}
        </Component>
    )
}