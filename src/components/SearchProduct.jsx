import { useProductsContext } from "../contexts/ProductsProvider"
import { searchIcon } from "../helper/icons"

const SearchProduct = () => {
    const {setSearch, search} = useProductsContext()
    return(

      <div className=" bg-red-200 m-auto w-full sm:w-6/12 relative mt-2 rounded-md shadow-sm ">
        <div className="w-12 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm ">{searchIcon}</span>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 ps-12 sm:w-full m-auto mt-8 "
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    )
}

export default SearchProduct