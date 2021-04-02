import axios from "axios";

const API_URL = 'https://tcc-etec-deliver.herokuapp.com';

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}