import { useLocation } from "react-router-dom"
import pratoRestaurant from "../assets/prato-de-restaurante-vegetariano.png"
import { useEffect, useState } from "react"
import { PropsModal } from "../interfaces"

const Modal: React.FC<PropsModal> = ({ menu }) => {
  const price = menu.sales[0].price
  const location = useLocation()
  const open = location.hash ? "block" : "hidden"
  const [add, setAdd] = useState<number>(1)
  const [total, setTotal] = useState<number>(price * add)

  const handleSetValue = (description: string) => {
    if (description === 'increment') setAdd(add + 1) 
    if (description === 'decrement') setAdd(add - 1)
  }

  useEffect(() => {
    if (add <= 0) setTotal(0)
    if (add >= 1) setTotal(price * add)
  }, [add, price])

  return (
    <div id={`${menu.name}Modal`} className={`${open} w-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50 font-mont shadow-box px-5`}>
      <div className="flex flex-col items-center justify-center opacity-100 max-w-xl z-50">
        <a href="#" className="z-50 text-center rounded-t-md sm:relative sm:left-[287px] sm:top-5 text-3xl cursor-pointer px-2 sm:rounded-[50%] bg-white font-bold sm:shadow-box sm:inline mx-2 shadow-box">x</a>
        <div className="z-40 bg-white text-black rounded-lg shadow-box">
          <header className="px-4 pt-4">
            <img src={pratoRestaurant} alt="" />
          </header>
          <div className=" px-3 py-7 w-full">
            <h1 className="text-2xl mb-2">{menu.name}</h1>
            <div className="flex sm:justify-between flex-col sm:flex-row items-start gap-2 sm:gap-4 text-base sm:items-end leading-tight">
              <span className="max-w-sm">{menu.sales[0].description}</span>
              <span className="text-cyan-600 text-3xl">R$ {price},00</span>
            </div>
          </div>
          <footer className="border-t border-solid border-black border-opacity-30 w-full flex justify-between px-3 py-4">
            <div className="px-2 py-1 border border-solid border-black border-opacity-30 rounded flex gap-4 text-cyan-600 font-bold max-w-xs z-50 cursor-pointer items-center justify-between">
              <div className="px-[2px]" onClick={() => handleSetValue('decrement')}>
                -
              </div>
              <div className=" relative top-0 bottom-0 left-0 right-0 z-50">
                {add}
              </div>
              <div className="px-[2px]" onClick={() => handleSetValue('increment')}>
                +
              </div>
            </div>
            <button className="bg-cyan-600 px-2 py-1 text-lg text-white flex items-center justify-between gap-10 rounded-sm cursor-pointer hover:bg-cyan-800 transition">
              <span>Adicionar</span>
              <span>R$ {total},00</span>            
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export { Modal }
