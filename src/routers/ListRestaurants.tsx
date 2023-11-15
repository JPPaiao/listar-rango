import { Search } from "../components/Search"
import { CardListRestaurant } from "../components/CardListRestaurant"
import { useEffect, useState } from "react"

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

const ListRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    const list = async () => {
      const data = await fetch("http://localhost:3000/restaurants").then(d => d.json())
      setRestaurants(data)
    }
    list()
  }, [])

  return (
    <div className="h-screen font-mont">
      <header className="flex gap-5 flex-col items-center">
        <div className="w-full bg-cyan-600 h-14">
        </div>
        <h1 className="text-2xl text-zinc-600">
          Bem-vindo ao Lista Rango
        </h1>
      </header>
      <main className="px-2">
        <div className="max-w-[840px] py-6 m-auto">
          <Search placeholder={"Buscar estabelecimento"} />
        </div>
        <div className="flex justify-evenly items-center flex-wrap gap-2 py-3 px-4">
          {
            restaurants.map((value: Restaurants) => {

              return (
                <CardListRestaurant restaurant={value}/>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export { ListRestaurants }