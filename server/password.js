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

// min 8 letters, atleast 1 symbol, upper and lower case 
export function passwordValidator(str)
    {
        var regex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(str);  
}   