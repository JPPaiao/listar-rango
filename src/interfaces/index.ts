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

interface Restaurant {
  id: number,
  name: string,
  address: string,
  image: string,
  hours: Hours[]
}

interface PropsSearch {
  placeholder: string,
  fillterList: any
}

interface PropsCardListRestaurant {
  restaurant: Restaurant
}

export type { Hours, PropsCardListRestaurant, PropsSearch, Restaurant, TextHours }
