import { createContext, useContext } from "react";
import { useFilterSortReducer } from "../customHooks/useFilterSortReducer";

const FilterSortContext = createContext({});
const useFilterSortContext = () => useContext(FilterSortContext);
const FilterSortContextProvider = ({ children }) => {
  const { filterSortState, filterSortStateDispatch } = useFilterSortReducer();
  return (
    <FilterSortContext.Provider
      value={{ filterSortState, filterSortStateDispatch }}
    >
      {children}
    </FilterSortContext.Provider>
  );
};

export { FilterSortContextProvider, useFilterSortContext };
