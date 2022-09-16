import { useEffect, useState } from 'react'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import Button from './components/Button'
import { PublishModal } from './modals/PublishModal'
import GameBanner from './components/GameBanner'

import logoImg from './assets/logo-nlw.svg'
import './styles/main.css'
import Input from './components/Form/Input'

interface Game {
  bannerUrl: string
  id: string
  title: string
  _count: {
    ads: number
  }
}

function App() {
  const [isPublishModalOpen, setPublishModalOpen] = useState<Boolean>(false)
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setGames(data)
      })
  }, [])

  function togglePublishModalVisibility(){
    setPublishModalOpen(!isPublishModalOpen)
  }

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className="font-black text-6xl text-white mt-20">Seu <span className="bg-nlwRainbowGradient bg-clip-text text-transparent">duo </span>está aqui.</h1>

      <div className="mt-16 grid-cols-6 grid gap-0">
        {games.map((game) => {
          return <GameBanner title={game.title} adsCount={game._count.ads} imgUrl={game.bannerUrl} key={game.id} />
        })}
      </div>

      <Dialog.Root>
        <div className="max-w-[1200px] w-full mt-8 pt-1 bg-nlwRainbowGradient rounded-lg overflow-hidden">
          <div className="flex justify-between items-center px-8 py-6 bg-blockBG rounded-t-lg">
            <div>
              <strong className="text-white text-2xl font-black block">Não encontrou seu duo?</strong>
              <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>
            <Button dialogTrigger>
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </Button>
          </div>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 bg-black/60 fixed" />

          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[488px] py-8 px-10 bg-blockBG rounded-lg shadow-xl shadow-black/50 text-white">
            <Dialog.Title className="font-black text-[32px]">Publique um anúncio</Dialog.Title>

            <form action="" className="flex flex-col gap-4 mt-8">

              <div className="w-full flex gap-2 flex-col">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input id="game" type="text" placeholder="Selecione o game que deseja jogar" />
              </div>

              <div className="w-full flex gap-2 flex-col">
                  <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                  <Input id="name" type="text" placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label>
                      <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label>
                      <Input id="discord" type="text" placeholder="Usuário#0000" />
                  </div>
              </div>

              <div className="flex gap-6">
                  <div className="flex gap-2 flex-col">
                      <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["Doming", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "TODO DIA"].map(day => {
                          return (
                            <button key={day} className="h-10 bg-zinc-900 rounded font-bold" title={day}>
                              {day != "TODO DIA" ? day[0] : "All"}
                            </button>
                          )
                        })}
                      </div>
                  </div>
                  <div className="flex gap-2 flex-col flex-1">
                      <label htmlFor="hoursStart hoursEnd" className="font-semibold">Qual horário do dia?</label>
                      <div className="grid grid-cols-2 gap-2">
                          <Input id="hoursStart" type="time" placeholder="De" />
                          <Input id="hoursEnd" type="time" placeholder="Até" />
                      </div>
                  </div>
              </div>
              <div className="flex gap-2 items-center">
                  <input className="text-emerald-400 border-none indeterminate:bg-zinc-900 bg-zinc-900 default:bg-zinc-900 rounded w-6 h-6" type="checkbox" name="" id="" />
                  <label className="text-sm" htmlFor="">Costumo me conectar ao chat de voz</label>
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
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
