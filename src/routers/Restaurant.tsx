import restaurantLogo from "../assets/vegan-restaurant-logo-design_1438-10.png"
import { CardCardapio } from "../components/CardCardapio"
import { Search } from "../components/Search"


const Restaurant: React.FC = () => {
  return (
    <div>
      <div className="w-full bg-cyan-600 h-14">
      </div>
      <header>
        <div>
          <img src={restaurantLogo} alt="Logo do restaurant" />
          <div>
            <h1>Nome do restaurante</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dignissimos excepturi aperiam laudantium, voluptates tempora sunt nam omnis delectus deleniti cupiditate dolore sit eligendi cumque, temporibus aliquam architecto rem voluptate?
            </p>
            <div>
              <span>Segunda à Sexta: 11:30 às 15:00</span>
              <span>Sabados: 11:30 às 22:00</span>
              <span>Domingos e feriados: 11:30 às 15:00</span>
            </div>
          </div>
        </div>
        <div>
          <Search placeholder="Buscar cardapio" />
        </div>
      </header>
      <main className="flex">
        <CardCardapio />
        <CardCardapio />
        <CardCardapio />
      </main>
    </div>
  )
}

export { Restaurant }