import { Search } from "../components/Search"
import { CardListRestaurant } from "../components/CardListRestaurant"

const ListRestaurants: React.FC = () => {
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
        <div className="w-[840px] py-6 m-auto">
          <Search placeholder={"Buscar estabelecimento"} />
        </div>
        <div className="flex justify-evenly items-center flex-wrap gap-2 py-3">
          <CardListRestaurant />
          <CardListRestaurant />
          <CardListRestaurant />
        </div>
      </main>
    </div>
  )
}

export { ListRestaurants }