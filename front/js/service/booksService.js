import { http } from "../utils/fetch.js";

export var GetBooks = async () =>{
    let token = sessionStorage.getItem("Token")
    let response = await http.get("http://localhost:3000/api/books", token);

    return response
}

export var GetBookById = async (id) =>{
    let token = sessionStorage.getItem("Token")
    let response = await http.get(`http://localhost:3000/api/books/${id}`, token);

    return response
}

export var DeleteBook = async (id) => {
    let token = sessionStorage.getItem("Token")
    let response = await http.delete(`http://localhost:3000/api/books/${id}`, token)

    return response
}

export var addBook = async (body) => {
    let token = sessionStorage.getItem("Token")
    let response = await http.post(
        "http://localhost:3000/api/books",
        body,
        token
    );

    return response
}

export var editBook = async (id, body) => {
    let token = sessionStorage.getItem("Token")
    let response = await http.put(
        `http://localhost:3000/api/books/${id}`,
        body,
        token
    )

    return response
}





