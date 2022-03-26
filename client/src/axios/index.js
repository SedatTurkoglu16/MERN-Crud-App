import axios from "axios";

const HTTP = axios.create({
    baseURL: 'http://localhost:5000',
});

export const createUser = async (formData) => await HTTP.post("/", formData);