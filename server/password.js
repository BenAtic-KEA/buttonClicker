import bcrypt from 'bcrypt';

const saltRounds = process.env.saltRounds


// hvordan skal det gøres?
export async function isLoggedIn(username, password){
    const user = {
        username: username,
        password: password,
        passwordhash: bcrypt.hash(password, saltRounds)
    }
}