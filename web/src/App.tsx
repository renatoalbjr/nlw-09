import { useEffect, useState } from 'react'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'

import Button from './components/Button'
import { PublishModal } from './modals/PublishModal'
import GameBanner from './components/GameBanner'

import logoImg from './assets/logo-nlw.svg'
import './styles/main.css'

export interface Game {
  bannerUrl: string
  id: string
  title: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

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

          <PublishModal games={games} />
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
