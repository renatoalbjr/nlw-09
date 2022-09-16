import { ButtonHTMLAttributes } from "react"
import {Trigger, Close} from '@radix-ui/react-dialog'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    dialogTrigger?: Boolean, 
    dialogClose?: Boolean, 
}

export default function Button({children, className, dialogTrigger = false, dialogClose = false, ...props}: ButtonProps){
    if(dialogTrigger)
        return (
            <Trigger className={"bg-violet-500 disabled:bg-zinc-500 hover:bg-violet-700 text-white font-medium rounded-md flex gap-3 px-4 py-3 "+className} {...props}>
                {children}
            </Trigger>
        )

    if(dialogClose)
        return (
            <Close className={"bg-violet-500 disabled:bg-zinc-500 hover:bg-violet-700 text-white font-medium rounded-md flex gap-3 px-4 py-3 "+className} {...props}>
                {children}
            </Close>
        )

    return (
        <button className={"bg-violet-500 disabled:bg-zinc-500 hover:bg-violet-700 text-white font-medium rounded-md flex gap-3 px-4 py-3 "+className} {...props}>
            {children}
        </button>
    )
        
}