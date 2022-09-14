import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImg from './assets/logo-nlw.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className="font-black text-6xl text-white mt-20">Seu <span className="bg-nlwRainbowGradient bg-clip-text text-transparent">duo </span>está aqui.</h1>

      <div className="mt-16 grid-cols-6 grid gap-0">
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-1.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-2.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-3.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-4.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-5.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="mx-3 rounded-lg overflow-hidden relative">
          <img src="/img-game-6.png" alt="" />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

      </div>

      <div className="max-w-[1200px] w-full mt-8 pt-1 bg-nlwRainbowGradient rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-8 py-6 bg-[#2A2634] rounded-t-lg">
          <div>
            <strong className="text-white text-2xl font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <div>
            <button className="bg-violet-500 hover:bg-violet-700 text-white font-medium rounded-md flex gap-3 px-4 py-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
