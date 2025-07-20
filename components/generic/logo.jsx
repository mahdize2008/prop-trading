import Image from "next/image"
import logo from "@/public/img/logo.png"
import clsx from "clsx"
import Link from "next/link"

export default function Logo({ className = '',size="base"}) {
    const setSize={
        sm:{
            width:40,
            height:24,
        },
        base:{
            width:54,
            height:30,
        },
        lg:{
            width:78,
            height:44,
        }
    }
    return (
        <Link href="/" className={clsx('w-fit block',className)}>
            <Image src={logo} alt="logo" width={setSize[size]["width"]} height={setSize[size]["height"]}/>
        </Link>
    )
}