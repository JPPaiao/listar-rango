import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10@2x.png"
import chevronDown from "../assets/chevron-down.svg"
import { CardCardapio } from "../components/CardCardapio"
import { Search } from "../components/Search"
import { useLoaderData } from "react-router-dom"
import { Restaurant, Hours, TextHours, Menus, LoaderRestaurant } from "../interfaces"
import { MagicMotion } from "react-magic-motion"
import { useState } from "react"

const RestaurantLoader = async ({ params }) => {
  const fetchRestaurants =  fetch("http://localhost:5173/db.json")
  const fetchMenus =  fetch("http://localhost:5173/db.json")
  const datas: { restaurants: Restaurant[], menus: Menus[] } = {
    restaurants: [],
    menus: []
  }

  await Promise.all([fetchRestaurants, fetchMenus])
  .then(async response => {
    datas.restaurants = await response[0].json()
    .then(e => e.restaurants)
    datas.menus = await response[1].json()
    .then(e => e.menus)
  })

  const restaurant = datas.restaurants.find(r => r.id == params.id)
  const menus = datas.menus.filter(m => m.restaurantId == restaurant?.id)

  return { restaurant, menus } as LoaderRestaurant
}

const daysWeekOpen = (hours: Hours) => {
  const days: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const daysWeek: string[] = []
  const endWeek: string[] = []

  hours.days.forEach((d: number) => {
    if (days[d-1] == days[0] || days[d-1] == days[days.length-1]) {
      endWeek.push(days[d-1])
    } else {
      daysWeek.push(days[d-1])
    }
  })
  
  const sunday: string = endWeek.includes('Domingo') ? `Domingo:  ${hours.from} às ${hours.to}` : ''
  const saturday: string = endWeek.includes('Sábado') ? `Sábado:  ${hours.from} às ${hours.to}` : ''
  const text: TextHours = {
    weeks: `${daysWeek[0]} à ${daysWeek[daysWeek.length-1]}:  ${hours.from} às ${hours.to}`,
    saturday: saturday,
    sunday: sunday
  }

  return text
}

const RestaurantPage: React.FC = () => {
  const loader = useLoaderData() as LoaderRestaurant
  const { restaurant, menus } = loader
  const daysOpen: TextHours = daysWeekOpen(restaurant.hours[0])
  const groups = ['Almoço', 'Bebidas', 'Sobremesa']
  const [showGroups, setShowGroups] = useState<number>(0)

  const handleShowsGroup = (numberGroup: number) => {
    setShowGroups(numberGroup)
  }

  return (
    <MagicMotion 
      transition={{ type: "tween" }}
    >
      <div>
        <div className="w-full bg-cyan-600 h-14 shadow-box">
        </div>
        <div className="max-w-6xl m-auto px-5">      
          <header className="max-w-4xl m-auto lg:m-0 py-6 px-7 lg:px-0">
            <div className="flex items-center">
              <img src={restaurantLogo} alt="Logo do restaurant" 
                className="w-36"
              />
              <div className="max-w-md text-zinc-700 font-mont">
                <h1 className="text-3xl font-medium">{restaurant.name}</h1>
                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dignissimos excepturi aperiam laudantium, voluptates tempora sunt nam omnis delectus deleniti
                </p>
                <div className="text-xs flex flex-col">
                  <span>{daysOpen.weeks}</span>
                  <span>{daysOpen.saturday}</span>
                  <span>{daysOpen.sunday}</span>
                </div>
              </div>
            </div>
          </header>
          <main className="flex justify-between gap-4 py-3">
            <div className="flex flex-col max-w-[802px] m-auto lg:m-0 w-full">
              <div className="w-full mb-4">
                <Search placeholder="Buscar cardapio" />
              </div>
              <div>
                {
                  groups.map((g, i) => (
                    <>
                      <div className="px-2 py-3 font-mont font-semibold cursor-pointer bg-white"
                        onClick={() => handleShowsGroup(i)}
                        key={i}
                      >
                        <div className="flex justify-between items-center px-3 pb-1 border-b border-black cursor-pointer">
                          <span>{g}</span>
                          <span>
                            <img src={chevronDown} alt="" 
                              className={showGroups === i ? "!transform transition duration-300 ease-in-out rotate-180" : "rotate-0 transition duration-300 ease-in-out !transform"} 
                            />
                          </span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 grid-cols-1 md:max-w-none max-w-lg m-auto gap-4 font-mont">
                        {
                          showGroups === i && menus.map(menu => (
                              <>
                                <CardCardapio menu={menu} />
                              </>
                            ) 
                          )
                        }
                      </div>
                    </>
                  ))
                }
              </div>
            </div>
            <div className="bg-zinc-300 w-[282px] h-[765px] hidden lg:block"></div>
          </main>
        </div>
      </div>
    </MagicMotion>
  )
}

export { RestaurantPage, RestaurantLoader }