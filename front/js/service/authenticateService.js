import { http } from "../utils/fetch.js"


const port = 3000

export const UserLogin = async (emailAuth, passwordAuth) => {
    let response = await http.post(
        `http://localhost:${port}/api/login`, 
        {email: emailAuth, password: passwordAuth}
    );

    return response
}

