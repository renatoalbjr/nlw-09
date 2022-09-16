import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{}

export default function Input(props: Props){
    return <input
    className="text-sm placeholder:text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4"
    {...props}
    />
}