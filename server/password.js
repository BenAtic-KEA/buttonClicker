import bcrypt from 'bcrypt';

const saltRounds = process.env.saltRounds

export async function isLoggedIn(username, password){
    const user = {
        username: "",
        password: ""
    }

    const result = await db.run(``)

}