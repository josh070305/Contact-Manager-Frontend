import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/contacts", 
});

export const getContacts = () => API.get("/contacts");
export const addContact = (data) => API.post("/contacts", data);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
