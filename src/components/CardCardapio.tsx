import pratoRestaurant from "../assets/prato-de-restaurante-vegetariano.png"

const CardCardapio: React.FC = () => {
  return (
    <div className="flex gap-3 max-w-xs shadow-box w-full">
      <img src={pratoRestaurant} alt="" 
        className="w-24"
      />
      <div >
        <h2>Nome do prato</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, harum vero.</p>
        <div>
          <span>R$</span>
        </div>
      </div>
    </div>
  )
}

export { CardCardapio }