import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"
import { Link } from "react-router-dom"
import { Restaurant, PropsCardListRestaurant } from "../interfaces"

const CardListRestaurant: React.FC<PropsCardListRestaurant> = ({ restaurant }) => {
  const week = new Date().getDay()
  const open = restaurant.hours[0].days.includes(week)

  return (
    <div>
      <Link to={`/restaurant/${restaurant.id}`} className="font-sans flex gap-6 justify-between items-center shadow-box rounded px-3  w-full cursor-pointer">
        <div className="max-w-[106px]">
          <img src={restaurantLogo} alt="Restaurant logo" />
        </div>
        <div className="text-zinc-600 font-mont">
          <h2 className="font-semibold text-base">{restaurant.name}</h2>
          <h3 className="text-xs max-w-[200px]">{restaurant.address}</h3>
        </div>
      </Link>
      <div className="relative w-14 bg-indigo-900 bottom-28 left-80 py-2 px-1 text-xs text-center flex justify-center items-center rounded-full text-white font-mont">
        {
          (open) ? (
            <>
              Aberto
            </>
          ) : (
            <>
            Fechado</>
          )
        }
      </div>
    </div>
  )
}

export { CardListRestaurant }