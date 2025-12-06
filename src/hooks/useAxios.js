import axios from "axios";

const BASE_URL = "https://hrapp-c8t9.onrender.com"

const useAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

const _get = (url, config = {}) => {
    return useAxios.get(url, config);
}

const _post = (url, data = {}, config = {}) => {
    return useAxios.post(url, data, config);
}

const _put = (url, data = {}, config = {}) => {
    return useAxios.put(url, data, config);
}

export { _get, _post, _put};