"use client"

import { useState } from "react"

type dataProps = {
  text: string,
  current: boolean
}
const data = [
  {current: true, text: "Então acho que posso começar com o dia que a gente conversou pela primeira vez, eu me senti tão leve conversando com você meu coração ficou calmo e nada mais importava."},
  {current: false, text: "Já é meu segundo mês junto a ti e cada dia que passa, eu me apaixono mais por você, tudo que eu penso é em ficar com você. Minha vida mudou completamente, depois que eu te conheci, acho que não se mais viver sem você"},
  {current: false, text: "Seu jeito, Seu sorriso, a forma engraçada como você esquece das coisas, seus olhos quando você está feliz, tudo em você é Perfeito 💜, eu vou fazer de tudo pra gente ficar junto, de tudo mesmo, sinto que é a unica pessoa com que vale a pena tentar"},
  {current: false, text: "Pode ter certeza que eu sou a pessoa mais feliz que tem nesse planeta e quero te fazer sentir o mesmo, te amei sem te tocar e sem te beijar, você é meu mundo, para todo sempre, com todo amor que hábita meu coração por você..."},
  {current: false,text: "Eu te amo muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito 💜"}
]; 

export function useLove(){
   
  const [textos, setTextos] = useState<dataProps[]>([]);

  textos.length == 0 ? setTextos(data) : null

  const handleLove = (event: React.MouseEvent<HTMLElement> ) => {
    const indexCurrent = textos.findIndex(texto => {return texto.current});
    const newArray = textos.map((texto, index) => {
      let {current, text} = texto;

      if(indexCurrent == index) {
        current = false
      }

      if(indexCurrent + 1 == index) {
        current = true
      }

      return {
        current,
        text
      } 
      

    })

    setTextos(newArray);
  }

  const CurrentText = textos.find(texto => {return texto.current})?.text;

  return {handleLove, CurrentText};
}