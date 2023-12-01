import { Search } from "../components/Search"
import { CardListRestaurant } from "../components/CardListRestaurant"
import { useLoaderData } from "react-router-dom"
import { Restaurant } from "../interfaces"
import { useState } from "react"
import { MagicMotion } from "react-magic-motion"

const LoaderList = async () => {
  const data = await fetch("https://raw.githubusercontent.com/JPPaiao/listar-rango/master/db.json")
  .then(d => d.json())
  .then(d => d.restaurants)
  const dataLoader = data

  return dataLoader
}

const ListRestaurants: React.FC = () => {
  const dataLoader = useLoaderData() as Restaurant[]
  const [restaurants, setRestaurants] = useState<Restaurant[]>(dataLoader)
  const [fillterRestaurants, setFillterRestaurants] = useState<Restaurant[]>(dataLoader)

  const handleFillter = (fill: string) => {
    setFillterRestaurants(restaurants.filter((r: Restaurant) => r.name.toLocaleLowerCase().includes(fill.toLocaleLowerCase())))
  }

  return (
    <MagicMotion>
      <div className="h-screen font-mont">
        <header className="flex gap-5 flex-col items-center">
          <div className="w-full bg-cyan-600 h-14">
          </div>
          <h1 className="text-2xl text-zinc-600 px-4">
            Bem-vindo ao Lista Rango
          </h1>
        </header>
        <main className="px-4">
          <div className="max-w-[840px] py-6 m-auto">
            <Search placeholder={"Buscar estabelecimento"} fillterList={handleFillter} />
          </div>
          <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-5xl m-auto justify-evenly items-center gap-y-5 py-3 px-4">
            {
              fillterRestaurants.map((value: Restaurant) => <CardListRestaurant restaurant={value} key={value.id} />
              )
            }
          </div>
        </main>
      </div>
    </MagicMotion>
  )
}

export { ListRestaurants, LoaderList }