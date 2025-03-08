import clsx from "clsx"

export default function UiColors() {
    const colors = {
        primary: ['bg-primary-dark', 'bg-primary', 'bg-primary-light'],
        secondary: ['bg-secondary-dark', 'bg-secondary', 'bg-secondary-light'],
        info: ['bg-info-dark', 'bg-info', 'bg-info-light'],
        success: ['bg-success-dark', 'bg-success', 'bg-success-light'],
        warning: ['bg-warning-dark', 'bg-warning', 'bg-warning-light'],
        danger: ['bg-danger-dark', 'bg-danger', 'bg-danger-light'],
        dim: ['bg-dim-dark', 'bg-dim', 'bg-dim-light'],
        neutral: ['bg-neutral-dark', 'bg-neutral', 'bg-neutral-light']
    }
    
    return (
        <div className="py-10">
            {
                Object.keys(colors).map((i, index) => (
                    <div className="container" key={index}>
                        <div className="-mx-1 -my-3 flex flex-wrap">
                            {
                                colors[i].map((iChild, indexChild) => (
                                    <div className="w-1/3 px-1 py-3 text-center text-sm text-dim" key={indexChild}>
                                        <div className={clsx('w-full h-10 rounded-base mb-1' , iChild)}></div>
                                        {
                                            iChild
                                        }
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                ))
            }
        </div>
    )
}