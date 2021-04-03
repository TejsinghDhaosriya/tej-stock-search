import axios from "axios";

const baseURL = "https://tej-stock.herokuapp.com"
// const baseURL = "http://127.0.0.1:8000"
export const getStocksListing = (params) => axios.get(`${baseURL}/api/stock`, { params });
export const getStocksDetail = (id) => axios.get(`${baseURL}/api/stock/${id}/`);