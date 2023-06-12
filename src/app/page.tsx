"use client"
import { useLove } from "@/Hooks/useLove"
import Image from "next/image"

export default function Home() {
  const { handleLove, CurrentText } = useLove();

  return (
    <div className="w-full h-full backdrop-blur-sm rounded-3xl flex flex-col p-4 gap-4 items-center">
      <h2 className="text-[#FF71B2] font-bold text-lg bg-white w-fit p-4 rounded-3xl  ">Dia dos namorados 💜</h2>
      <Image src="/buque2.png" alt="buque de flores" width={140} height={400}/>
      <div className="rounded-3xl flex-1 bg-[#F2E2E7] w-full p-4 font-medium text-zinc-800">
       {CurrentText}
      </div>
      
      <button onClick={handleLove} className=" w-full font-bold text-white leading-7 p-2 bg-[#FFA3CD] shadow-shadowInset rounded-2xl">
        Próximo
      </button>
    </div>
  )
}
