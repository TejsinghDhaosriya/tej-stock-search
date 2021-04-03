// ACTION TYPES
export const SAGA_FETCH_STOCKS = "stocks/SAGA_FETCH_STOCKS";
export const SAGA_FETCH_STOCK= "stocks/SAGA_FETCH_STOCK";

// ACTION CREATORS

export const stocksListing = (data) => ({
  type: SAGA_FETCH_STOCKS,
  data,
});
export const stocksDetail = (data) => ({
  type: SAGA_FETCH_STOCK,
  data,
});

