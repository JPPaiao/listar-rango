import { useState } from "react"
import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"

interface Restaurant {
  id: number,
  name: string,
  address: string,
  image: string,
  hours: [
    {
      from: string,
      to: string,
      days: number[]
    }
  ]
}

interface Props {
  restaurant: Restaurant
}

const CardListRestaurant: React.FC<Props> = ({ restaurant }) => {
  const week = new Date().getDay()
  const open = restaurant.hours[0].days.includes(week)

  return (
    <div>
      <div className="font-sans flex gap-6 justify-between items-center shadow-box rounded px-3  w-full">
        <div className="max-w-[106px]">
          <img src={restaurant.image} alt="Restaurant logo" />
        </div>
        <div className="text-zinc-600 font-mont">
          <h2 className="font-semibold text-base">{restaurant.name}</h2>
          <h3 className="text-xs max-w-[200px]">{restaurant.address}</h3>
        </div>
      </div>
      <div className="relative w-10 bg-indigo-900 bottom-28 left-80 p-2 text-[.50rem] text-center flex justify-center items-center rounded-full text-white font-mont">
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