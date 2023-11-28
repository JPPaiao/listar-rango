import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"
import { Link } from "react-router-dom"
import { Restaurant, PropsCardListRestaurant } from "../interfaces"

const CardListRestaurant: React.FC<PropsCardListRestaurant> = ({ restaurant }) => {
  const week = new Date().getDay()
  const open = restaurant.hours[0].days.includes(week)
  const colorOpen = open ? "bg-[#2B0D61]" : "bg-[#B5ABD4]"

  return (
    <div className="flex hover:scale-95 transition ease-in cursor-pointer">
      <Link to={`/restaurant/${restaurant.id}`} className="font-sans flex gap-6 justify-between items-center shadow-box rounded px-3 w-full">
        <div className="max-w-[106px]">
          <img src={restaurantLogo} alt="Restaurant logo" />
        </div>
        <div className="text-zinc-600 font-mont">
          <h2 className="font-semibold text-base">{restaurant.name}</h2>
          <h3 className="text-xs max-w-[200px]">{restaurant.address}</h3>
        </div>
      </Link>
      <div className={`${colorOpen} font-mont relative flex justify-center items-center text-[8px] p-5 h-11 w-11 text-white rounded-[50%] right-5 bottom-2`}>
        {
          (open) ? (
            <span>
              Aberto
            </span>
          ) : (
            <span>
              Fechado
            </span>
          )
        }
      </div>
    </div>
  )
}

export { CardListRestaurant }