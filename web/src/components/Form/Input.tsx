import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{}

export default function Input({className, ...props}: Props){
    return (
        <input
            className={"appearance-none text-sm placeholder:text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4 "+className}
            {...props}
        />
    )
}