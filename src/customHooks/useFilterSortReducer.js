import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
export const useFilterSortReducer = () => {
  const navigate = useNavigate();
  const INITIAL_SORT_FILTER_STATE = {
    categories: {
      racket: false,
      kitbag: false,
      shoes: false,
      apparel: false,
      assessories: false,
    },
    price: 10000,
    fastDelivery: false,
    includeOutOfStock: false,
    rating: {
      oneAndAbove: false,
      twoAndAbove: false,
      threeAndAbove: false,
      fourAndAbove: false,
    },
    sort: "",
  };
  const reducer = (filterSortState, action) => {
    navigate("/products");
    const value = action.value;
    switch (action.type) {
      case "FILTER_BY_racket_CATEGORY":
        return {
          ...filterSortState,
          categories: { ...filterSortState.categories, racket: value },
        };
      case "FILTER_BY_KITBAG_CATEGORY":
        return {
          ...filterSortState,
          categories: { ...filterSortState.categories, kitbag: value },
        };
      case "FILTER_BY_SHOES_CATEGORY":
        return {
          ...filterSortState,
          categories: { ...filterSortState.categories, shoes: value },
        };
      case "FILTER_BY_APPAREL_CATEGORY":
        return {
          ...filterSortState,
          categories: { ...filterSortState.categories, apparel: value },
        };
      case "FILTER_BY_ASSESSORIES_CATEGORY":
        return {
          ...filterSortState,
          categories: { ...filterSortState.categories, assessories: value },
        };
      case "FILTER_BY_FAST_DELIVERY":
        return {
          ...filterSortState,
          fastDelivery: value,
        };
      case "FILTER_BY_AVAILABILITY":
        return {
          ...filterSortState,
          includeOutOfStock: value,
        };
      case "FILTER_BY_FOUR_AND_ABOVE_RATING":
        return {
          ...filterSortState,
          rating: { ...filterSortState.rating, fourAndAbove: value },
        };
      case "FILTER_BY_THREE_AND_ABOVE_RATING":
        return {
          ...filterSortState,
          rating: { ...filterSortState.rating, threeAndAbove: value },
        };
      case "FILTER_BY_TWO_AND_ABOVE_RATING":
        return {
          ...filterSortState,
          rating: { ...filterSortState.rating, twoAndAbove: value },
        };
      case "FILTER_BY_ONE_AND_ABOVE_RATING":
        return {
          ...filterSortState,
          rating: { ...filterSortState.rating, oneAndAbove: value },
        };
      case "SORT_BY_PRICE":
        return {
          ...filterSortState,
          sort: value,
        };
      case "FILTER_BY_PRICE":
        return {
          ...filterSortState,
          price: value,
        };
      case "RESET":
        return {
          categories: {
            racket: false,
            kitbag: false,
            shoes: false,
            apparel: false,
            assessories: false,
          },
          price: 10000,
          fastDelivery: false,
          includeOutOfStock: false,
          rating: {
            oneAndAbove: false,
            twoAndAbove: false,
            threeAndAbove: false,
            fourAndAbove: false,
          },
          sort: "",
        };
    }
  };

  const [filterSortState, filterSortStateDispatch] = useReducer(
    reducer,
    INITIAL_SORT_FILTER_STATE
  );
  return {
    filterSortState,
    filterSortStateDispatch,
  };
};
