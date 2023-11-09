import searchIcon from "../assets/search-svgrepo-com.svg"

interface Props {
  placeholder: string
}

const Search: React.FC<Props> = ({ placeholder }) => {
  return (
    <form action="#" className="flex w-[600px]">
      <input type="text" placeholder={placeholder}
        className="outline-none px-7 py-2 rounded-full shadow-md w-full bg-gray-50"
      />
      <img src={searchIcon} alt="search" 
        className="w-4 relative right-8 cursor-pointer"
      />
    </form>
  )
}

export { Search }