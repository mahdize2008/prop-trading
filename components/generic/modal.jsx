import clsx from "clsx"
import PanelBackdrop from "./backdrop"
import Heading from "./heading"
import Btn from "./btn"

export default function PanelModal({ title, children, size = 'base' , onClose }) {
    const sizes = {
        base: 'w-96'
    }
    return (
        <div>
            <PanelBackdrop onClick={onClose}/>
            <div className={clsx(sizes[size], 'max-sm:w-full bg-white shadow-card lg:rounded-xl rounded-md max-sm:rounded-b-none fixed sm:top-1/2 max-sm:bottom-0 right-1/2 sm:-translate-y-1/2 translate-x-1/2 z-50 max-h-[80%] overflow-y-auto')}>
                <div className="lg:p-4 p-3 lg:rounded-xl rounded-md w-full flex items-center justify-between bg-neutral-light border-b border-solid border-neutral-dark">
                    <Heading variant="h5">
                        {title}
                    </Heading>
                    <Btn icon="icon-close" size="xs" color="dim" variant="lightness" square onClick={onClose}></Btn>
                </div>
                <div className="lg:p-4 p-3">
                    { children }
                </div>
            </div>
        </div>
    )
}