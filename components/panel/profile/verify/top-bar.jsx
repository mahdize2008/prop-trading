import clsx from "clsx";


export default function ProfileVerifyTopbar({active=1,className}){
    return (
        <ul className={clsx("flex items-center p-2 rounded-full bg-neutral-light px-4 py-3",className)}>
            <li className={clsx("ml-2 last:ml-0 text-sm text-dim-lighter font-bold flex items-center",{"text-warning" : active===1},{"text-success" : active>1})}>
                <i className="icon-loading text-base ml-2"></i>
                ثبت نام اولیه
            </li>
            <li className="ml-2 last:ml-0 grow h-[1px] bg-dim-lighter"></li>
            <li className={clsx("ml-2 last:ml-0 text-sm text-dim-lighter font-bold flex items-center",{"text-warning" : active===2},{"text-success" : active>2})}>
                <i className="icon-add-user text-base ml-2"></i>
                اطلاعات هویتی
            </li>
            <li className="ml-2 last:ml-0 grow h-[1px] bg-dim-lighter"></li>
            <li className={clsx("ml-2 last:ml-0 text-sm text-dim-lighter font-bold flex items-center",{"text-warning" : active===3},{"text-success" : active>3})}>
                <i className="icon-camera text-base ml-2"></i>
                ویدیوی سلفی
            </li>
            <li className="ml-2 last:ml-0 grow h-[1px] bg-dim-lighter"></li>
            <li className={clsx("ml-2 last:ml-0 text-sm text-dim-lighter font-bold flex items-center",{"text-warning" : active===4})}>
                <i className="icon-avatar text-base ml-2"></i>
                تایید هویت
            </li>
        </ul>
    )
}