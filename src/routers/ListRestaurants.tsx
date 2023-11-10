import { Search } from "../components/Search"
import { CardListRestaurant } from "../components/CardListRestaurant"

const ListRestaurants: React.FC = () => {
  return (
    <div className="h-screen">
      <header className="flex gap-5 flex-col items-center">
        <div className="w-full bg-cyan-600 h-14">
        </div>
        <h1 className="text-2xl text-zinc-600">
          Bem-vindo ao Lista Rango
        </h1>
        <Search placeholder={"Buscar estabelecimento"} />
      </header>
      <main className="px-2 py-12 flex justify-evenly items-center flex-wrap gap-2">
        <CardListRestaurant />
        <CardListRestaurant />
        <CardListRestaurant />
      </main>
    </div>
  )
}

export { ListRestaurants }