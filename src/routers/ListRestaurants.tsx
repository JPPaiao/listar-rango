import { Search } from "../components/Search"

const ListRestaurants: React.FC = () => {
  return (
    <div className="h-screen">
      <header className="flex gap-5 flex-col items-center">
        <div className="w-full bg-cyan-600 h-10">
        </div>
        <h1 className="text-2xl ">
          Bem-vindo ao Lista Rango
        </h1>
        <Search placeholder={"Buscar estabelecimento"} />
      </header>
      <main>

      </main>
    </div>
  )
}

export { ListRestaurants }