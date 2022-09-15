import { ButtonHTMLAttributes } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export default function Button({children, ...props}: ButtonProps){
    return (
        <button className="bg-violet-500 disabled:bg-zinc-500 hover:bg-violet-700 text-white font-medium rounded-md flex gap-3 px-4 py-3" {...props}>
            {children}
        </button>
    )
}