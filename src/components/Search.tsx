import { useEffect, useState } from "react"
import searchIcon from "../assets/search-svgrepo-com.svg"
import { PropsSearch } from "../interfaces"

const Search: React.FC<PropsSearch> = ({ placeholder, fillterList }) => {
  const [searchRestaurants, setSearchRestaurants] = useState<string>('')

  useEffect(() => {
    if (typeof fillterList === 'function') {
      fillterList(searchRestaurants)
    }
  }, [searchRestaurants])

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full font-mont">
      <input type="text" placeholder={placeholder} value={searchRestaurants} onChange={(value: any) => setSearchRestaurants(value.target.value)}
        className="outline-none px-7 py-2 bg-[#fffefe] rounded-full shadow-box w-full"
      />
      <img src={searchIcon} alt="search" 
        className="w-4 relative right-8 cursor-pointer"
      />
      <input type="submit" value='' /> 
    </form>
  )
}

export { Search }