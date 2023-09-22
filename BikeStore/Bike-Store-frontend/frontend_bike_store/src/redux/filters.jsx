import { createContext, useState, useContext } from "react";


const FiltersBicicletas = createContext();

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        categoria: 'all',
        minPrecio: 0,
        marca: 'all',
        talla: 'all'
      })


      return (
        <FiltersBicicletas.Provider value={{filters, setFilters}}>
            { children }
        </FiltersBicicletas.Provider>
      )
}

export const useFilters = () => {
    return useContext(FiltersBicicletas)
};