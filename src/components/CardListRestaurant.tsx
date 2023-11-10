import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"

const CardListRestaurant: React.FC = () => {
  return (
    <div>
      <div className="font-sans flex gap-6 justify-between items-center shadow-box rounded px-3 py-5 w-full">
        <div className="w-[106]">
          <img src={restaurantLogo} alt="Restaurant logo" />
        </div>
        <div className="text-zinc-600 w-full">
          <h2 className="font-semibold text-base">Nome do restaurante</h2>
          <h3 className="text-xs">Endereço do restaurante</h3>
        </div>
      </div>
      <div className="relative w-10 bg-indigo-900 bottom-28 left-72 p-2 text-[.50rem] text-center flex justify-center items-center rounded-full text-white">
        Aberto agora
      </div>
    </div>
  )
}

export { CardListRestaurant }