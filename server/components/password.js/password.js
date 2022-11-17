import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12 || process.env.SALT_ROUNDS


// hvordan skal det gøres?
export async function encryptPassword(password){
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return encryptedPassword
}

export async function comparePassword(password, encryptedPasswordHash){
    const result = await bcrypt.compare(password,encryptedPasswordHash)
    return result
}