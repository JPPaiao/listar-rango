import pratoRestaurant from "../assets/prato-de-restaurante-vegetariano-menu@2x.png"
import { PropsCardCardapio } from "../interfaces"

const CardCardapio: React.FC<PropsCardCardapio> = ({ menu, menuModal }) => {
  return (
    <a href={`#${menu.name}Modal`} onClick={() => menuModal(menu)} className="flex gap-3 shadow-box h-[116px] rounded-r-md cursor-pointer hover:scale-95 transition ease-in">
      <img src={pratoRestaurant} alt="" 
        className="w-28"
      />
      <div className="py-1 flex flex-col justify-center gap-2 font-mont w-full">
        <h2 className="text-lg font-semibold">{menu.name}</h2>
        <p className="text-xs md:overflow-ellipsis md:max-w-[25ch] md:whitespace-nowrap md:overflow-hidden">{menu.sales[0].description}</p>
        <div className="flex gap-2 items-end">
          <span className="text-cyan-500 font-semibold text-base">R$ {menu.sales[0].price},00</span>
          <span className="text-xs line-through">R$ {menu.price},00</span>
        </div>
      </div>
    </a>
  )
}

export { CardCardapio }