import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";



export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL);
    return data;
};

