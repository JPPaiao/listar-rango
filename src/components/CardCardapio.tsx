import pratoRestaurant from "../assets/prato-de-restaurante-vegetariano.png"

const CardCardapio: React.FC = () => {
  return (
    <div className="flex gap-3 max-w-sm shadow-box h-[116px] rounded-r-md cursor-pointer hover:scale-95 transition ease-in">
      <img src={pratoRestaurant} alt="" 
        className="w-28"
      />
      <div className="px-1 py-1 flex flex-col justify-center gap-2 font-mont w-full">
        <h2 className="text-lg font-semibold">Nome do prato</h2>
        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex gap-2 items-end">
          <span className="text-cyan-500 font-semibold text-base">R$ 19,00</span>
          <span className="text-xs line-through">R$ 19,00</span>
        </div>
      </div>
    </div>
  )
}

export { CardCardapio }