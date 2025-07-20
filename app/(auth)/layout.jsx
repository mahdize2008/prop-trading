import Logo from "@/components/generic/logo";

export default function AuthLayout({children}){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-8">
            <Logo className="mb-4" size="lg"/>
            {children}
        </div>
    )
}