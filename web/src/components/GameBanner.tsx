import { AnchorHTMLAttributes } from "react";

interface BannerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    imgUrl: string,
    title: string,
    adsCount: number,
}

export default function GameBanner({imgUrl, title, adsCount, ...props}: BannerProps){
    return (
        <a className="mx-3 rounded-lg overflow-hidden relative" {...props}>
          <img src={imgUrl} alt={title} />
          <div className="bg-nlwShadowGradient w-full absolute left-0 bottom-0 pt-16 px-4 pb-4">
            <strong className="text-white font-bold block">{title}</strong>
            <span className="text-zinc-300 text-sm block">{adsCount.toString()} anúncio(s)</span>
          </div>
        </a>
    )
}