import { Search } from "../components/Search"
import { CardListRestaurant } from "../components/CardListRestaurant"
import { useLoaderData } from "react-router-dom"
import { Restaurant } from "../interfaces"

const LoaderList = async () => {
  const data = await fetch("http://localhost:3000/restaurants").then(d => d.json())
  const dataLoader = data

  return dataLoader
}

const ListRestaurants: React.FC = () => {
  const dataLoader = useLoaderData() as Restaurant[]
  const restaurants: Restaurant[] = dataLoader

  return (
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
          <Search placeholder={"Buscar estabelecimento"} />
        </div>
        <div className="grid grid-cols-1 max-w-md md:grid-cols-2 md:max-w-3xl md:gap-6 lg:grid-cols-3 lg:max-w-5xl m-auto justify-evenly items-center gap-4 py-3 px-4">
          {
            restaurants.map((value: Restaurant) => <CardListRestaurant restaurant={value} key={value.id} />
            )
          }
        </div>
      </main>
    </div>
  )
}

export { ListRestaurants, LoaderList }