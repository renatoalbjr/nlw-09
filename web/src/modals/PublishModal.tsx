import { Content, Title } from "@radix-ui/react-dialog"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Select from "@radix-ui/react-select"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { GameController, Check, CaretDown } from "phosphor-react"
import Button from "../components/Button"
import Input from "../components/Form/Input"
import { Game } from "../App"
import { FormEvent, useState } from "react"
import axios from 'axios'

interface Props {
    games: Game[]
}

interface FormData {
    gameId: string,
    name: string,
    yearsPlaying: number,
    discord: string,
    weekDays: string[],
    hoursStart: string,
    hoursEnd: string,
    useVoiceChannel: Boolean,
}

export function PublishModal({games}: Props){
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState<Boolean>(false)

    async function handleFormSubmit(event: FormEvent){
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const {hoursStart, hoursEnd, gameId, yearsPlaying, ...rest} = Object.fromEntries(formData) as unknown as FormData

        try {
            await axios(`http://localhost:3333/games/${gameId}/ads`, {
                method: 'POST',
                data: {
                    gameId,
                    yearsPlaying: Number(yearsPlaying),
                    hoursStart: hoursStart.split(':').reduce((curr, prev) => { return Number(curr)*60+Number(prev)}, 0),
                    hoursEnd: hoursEnd.split(':').reduce((curr, prev) => { return Number(curr)*60+Number(prev)}, 0),
                    ...rest,
                    weekDays: weekDays.slice(0, 7).sort(),
                    useVoiceChannel: useVoiceChannel,
                }
            })
            alert('Anúncio criado com sucesso!')
        }
        catch (err) {
            console.log(err)
            alert('Erro ao criar o anúncio!')
        }
        console.log({
            hoursStart: hoursStart.split(':').reduce((curr, prev) => { return Number(curr)*60+Number(prev)}, 0),
            hoursEnd: hoursEnd.split(':').reduce((curr, prev) => { return Number(curr)*60+Number(prev)}, 0),
            ...rest,
            weekDays: weekDays.slice(0, 7).sort(),
            useVoiceChannel: useVoiceChannel,
        })
    }
    
    function handleDaySelect(wd: string[]){
        if(weekDays.length === 8){//Case all were selected
            if(wd[6] === "7") wd.pop() //Case a day have been deselected (since "All" always appear at the last index)
            else wd = [] //Case all have been deselected
            setWeekDays(wd)
            return
        }
        
        //Case only some were selected
        let allIndex = wd.findIndex((value) => value === "7");
        if(allIndex >= 0){//If "All" was toggled
            let r: string[] = []
            for(let i = 0; i < 8; i++) r.push(i.toString())
            setWeekDays(r)
            return
        }
        if(wd.length === 7){//If all were toggled
            wd.push("7")
            setWeekDays(wd)
            return
        }
        setWeekDays(wd)
    }

    return (
        <Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[488px] py-8 px-10 bg-blockBG rounded-lg shadow-xl shadow-black/50 text-white">
            <Title className="font-black text-[32px]">Publique um anúncio</Title>

            <form onSubmit={(event) => handleFormSubmit(event)} action="" className="flex flex-col gap-4 mt-8">

              <div className="w-full flex gap-2 flex-col">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Select.Root name="gameId">
                    <Select.Trigger id="gameId" aria-label="Game" className="text-sm text-zinc-500 font-[Roboto] w-full rounded bg-zinc-900 py-3 px-4 flex justify-between">
                        <Select.Value placeholder="Selecione o game que deseja jogar" />
                        <Select.Icon className="text-zinc-400">
                            <CaretDown size={16} />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className="overflow-hidden bg-zinc-800 rounded">
                            <Select.Viewport>
                                {games.map((item) => {
                                    return (
                                        <Select.Item key={item.id} className="text-sm text-white font-[Roboto] w-full rounded bg-zinc-900 flex justify-between items-center py-3 px-4 mt-[1px] select-none highlight-option-emerald-400" value={item.id}>
                                            <Select.ItemText >{item.title}</Select.ItemText>
                                            <Select.SelectItemIndicator className="text-emerald-400">
                                                <Check size={16} />
                                            </Select.SelectItemIndicator>
                                        </Select.Item>
                                    )
                                })}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                  </Select.Root>
              </div>

              <div className="w-full flex gap-2 flex-col">
                  <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                  <Input name="name" id="name" type="text" placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label>
                      <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"/>
                  </div>
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label>
                      <Input name="discord" id="discord" type="text" placeholder="Usuário#0000" />
                  </div>
              </div>

              <div className="flex gap-6">
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                      <ToggleGroup.Root value={weekDays} onValueChange={handleDaySelect} type="multiple" aria-label="Dias de jogatina" className="grid grid-cols-4 gap-2">
                        {["Doming", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "TODO DIA"].map((day, index) => {
                          return (
                                <ToggleGroup.Item value={index.toString()} className="h-10 bg-zinc-900 rounded font-bold highlight-toggle-emerald-400 hover:text-zinc-300" title={day}>
                                    {day != "TODO DIA" ? day[0] : "All"}
                                </ToggleGroup.Item>
                            // <button key={day} className="h-10 bg-zinc-900 rounded font-bold" title={day}>
                            //   {day != "TODO DIA" ? day[0] : "All"}
                            // </button>
                          )
                        })}
                      </ToggleGroup.Root>
                  </div>
                  <div className="flex gap-2 flex-col flex-1">
                      <label htmlFor="hoursStart hoursEnd" className="font-semibold">Qual horário do dia?</label>
                      <div className="grid grid-cols-2 gap-2">
                          <Input name="hoursStart" id="hoursStart" type="time" placeholder="De" />
                          <Input name="hoursEnd" id="hoursEnd" type="time" placeholder="Até" />
                      </div>
                  </div>
              </div>
              <div className="flex gap-2 items-center">
                  <Checkbox.Root onCheckedChange={
                    (checked) => {
                        if(checked) setUseVoiceChannel(true)
                        else setUseVoiceChannel(false)
                    }} 
                    id="useVoiceChannel" 
                    className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
                    <Checkbox.Indicator className="text-emerald-400">
                        <Check size={16} />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label className="text-sm" htmlFor="useVoiceChannel">Costumo me conectar ao chat de voz</label>
              </div>

              <footer className="flex justify-end gap-4 mt-4">
                  <Button dialogClose className="bg-zinc-500 hover:bg-zinc-600">
                      Cancelar
                  </Button>
                  <Button type="submit">
                      <GameController size={24} />
                      Encontrar duo
                  </Button>
              </footer>
            </form>
          </Content>
    )
}