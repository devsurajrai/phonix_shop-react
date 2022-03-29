import { filterByAvailability } from "./filterByAvailability";
import { filterByCategory } from "./filterbyCategory";
import { filterByDelivery } from "./filterByDelivery";
import { filterByPrice } from "./filterByPrice";
import { filterByRating } from "./filterByRating";
import { sort } from "./sort";

const reduce = (accu, current) => (data, state) =>
  current(accu(data, state), state);
const composefilterSort = (...functions) => functions.reduce(reduce);

const getFilteredSortedProdData = composefilterSort(
  filterByAvailability,
  filterByDelivery,
  filterByCategory,
  filterByPrice,
  filterByRating,
  sort
);

export { getFilteredSortedProdData };

// sort
