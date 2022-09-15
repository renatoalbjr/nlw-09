import { GameController } from "phosphor-react"
import Button from "../components/Button"

interface ModalProps{
    toggleVisibility: () => void
}

export function PublishModal({toggleVisibility}: ModalProps){
    return (
    <>
        <div className="z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/[.6]" onClick={() => toggleVisibility()} />

        <form action="" className="z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[488px] flex flex-col gap-4 py-8 px-10 bg-blockBG rounded-lg">
            <h1 className="font-black text-[32px] text-white">Publique um anúncio</h1>

            <div className="w-full flex gap-2 flex-col">
                <label className="font-semibold text-white">Qual o game?</label>
                <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="Selecione o game que deseja jogar" />
            </div>

            <div className="w-full flex gap-2 flex-col">
                <label className="font-semibold text-white">Seu nome (ou nickname)</label>
                <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="Como te chamam dentro do game?" />
            </div>

            <div className="w-full flex items-stretch gap-6">
                <div className="flex gap-2 flex-col">
                    <label className="font-semibold text-white">Joga há quantos anos?</label>
                    <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex gap-2 flex-col">
                    <label className="font-semibold text-white">Qual seu Discord?</label>
                    <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="Usuario#0000" />
                </div>
            </div>

            <div className="w-full flex items-stretch gap-6">
                <div className="flex gap-2 flex-col flex-none">
                    <label className="font-semibold text-white">Quando costuma jogar?</label>
                    <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="" />
                </div>
                <div className="flex gap-2 flex-col">
                    <label className="font-semibold text-white">Qual horário do dia?</label>
                    <div className="flex gap-2">
                        <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="De" />
                        <input className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4" type="text" placeholder="Até" />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <input className="text-emerald-400 border-none indeterminate:bg-zinc-900 bg-zinc-900 default:bg-zinc-900 rounded w-6 h-6" type="checkbox" name="" id="" />
                <label className="text-sm text-white" htmlFor="">Costumo me conectar ao chat de voz</label>
            </div>

            <div className="flex justify-end gap-4">
                <Button disabled>
                    Cancelar
                </Button>
                <Button>
                    <GameController size={24} />
                    Encontrar duo
                </Button>
            </div>
        </form>
    </>
    )
}