import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10@2x.png"
import chevronDown from "../assets/chevron-down.svg"
import { CardCardapio } from "../components/CardCardapio"
import { Search } from "../components/Search"
import { useLoaderData } from "react-router-dom"

interface Restaurants {
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

const RestaurantLoader = async ({ params }) => {
  const data = await fetch("http://localhost:3000/restaurants").then(d => d.json())
  const dataLoader: Restaurants[] = data
  const restaurant = dataLoader.find(r => r.id == params.id)

  return restaurant
}
const Restaurant: React.FC = () => {
  const restaurant: Restaurants = useLoaderData() as Restaurants

  return (
    <div>
      <div className="w-full bg-cyan-600 h-14 shadow-box">
      </div>
      <div className="max-w-6xl m-auto px-3">      
        <header className="max-w-4xl pt-6">
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
                <span>Segunda à Sexta: {restaurant.hours[0].from} às {restaurant.hours[0].to}</span>
                <span>Sabados: 11:30 às 22:00</span>
                <span>Domingos e feriados: 11:30 às 15:00</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex justify-between gap-4 py-3">
          <div className="flex flex-col max-w-[802px]">
            <div className="w-full mb-4">
              <Search placeholder="Buscar cardapio" />
            </div>
            <div>
              <div className="px-2 py-3 font-mont font-semibold">
                <div className="flex justify-between items-center px-3 pb-1 border-b border-black cursor-pointer">
                  <span>Almoço</span>
                  <span>
                    <img src={chevronDown} alt="" />
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 font-mont py-5">
                <CardCardapio />
                <CardCardapio />
                <CardCardapio />
                <CardCardapio />
              </div>
              <div className="px-2 py-3 font-mont font-semibold">
                <div className="flex justify-between items-center px-3 pb-1 border-b border-black cursor-pointer">
                  <span>Bebidas</span>
                  <span>
                    <img src={chevronDown} alt="" />
                  </span>
                </div>
              </div>
              <div className="px-2 py-3 font-mont font-semibold">
                <div className="flex justify-between items-center px-3 pb-1 border-b border-black cursor-pointer">
                  <span>Sobremesa</span>
                  <span>
                    <img src={chevronDown} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-300 w-[282px] h-[765px] hidden lg:block"></div>
        </main>
      </div>
    </div>
  )
}

export { Restaurant, RestaurantLoader }