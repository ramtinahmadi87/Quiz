import axios from "axios";
const BASE_URL= 'https://opentdb.com/api.php?amount=5&type=multiple'
const api = axios.create({
    baseURL: BASE_URL
})
export default api 