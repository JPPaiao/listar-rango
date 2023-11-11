import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"
import { CardCardapio } from "../components/CardCardapio"
import { Search } from "../components/Search"


const Restaurant: React.FC = () => {
  return (
    <div>
      <div className="w-full bg-cyan-600 h-14">
      </div>
      <header className="max-w-4xl m-auto py-6">
        <div className="flex items-center">
          <img src={restaurantLogo} alt="Logo do restaurant" 
            className="w-36"
          />
          <div className="max-w-md text-zinc-700">
            <h1 className="text-3xl font-bold">Nome do restaurante</h1>
            <p className="text-sm py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dignissimos excepturi aperiam laudantium, voluptates tempora sunt nam omnis delectus deleniti 
            </p>
            <div className="text-xs flex flex-col">
              <span>Segunda à Sexta: 11:30 às 15:00</span>
              <span>Sabados: 11:30 às 22:00</span>
              <span>Domingos e feriados: 11:30 às 15:00</span>
            </div>
          </div>
        </div>
        <div className="w-[692px]">
          <Search placeholder="Buscar cardapio" />
        </div>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex max-w-4xl flex-wrap m-auto items-center gap-6">
          <CardCardapio />
          <CardCardapio />
          <CardCardapio />
        </div>
      </main>
    </div>
  )
}

export { Restaurant }