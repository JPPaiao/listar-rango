interface TextHours {
  weeks: string,
  saturday: string,
  sunday: string
}

interface Hours {
  from: string,
  to: string,
  days: number[]
}

interface Sales {
  description: string,
  price: number,
  hours: Hours[]
}

interface LoaderRestaurant {
  restaurant: Restaurant,
  menus: Menus[]
}

interface Menus {
  restaurantId: number,
  name: string,
  image: string,
  price: number,
  group: string,
  sales: Sales[]
}

interface Restaurant {
  id: number,
  name: string,
  address: string,
  image: string,
  hours: Hours[]
}

interface PropsModal {
  menu: Menus
}

interface PropsSearch {
  placeholder: string,
  fillterList?: any
}

interface PropsCardListRestaurant {
  restaurant: Restaurant
}

interface PropsCardCardapio {
  menu: Menus
  menuModal?: any
}

export type { Hours, PropsCardListRestaurant, PropsSearch, Restaurant, PropsCardCardapio, TextHours, Menus, LoaderRestaurant, PropsModal }
