export function usernameValidator(str){
// start with a letter, and only contain letters and numbers min. length 6
    var regex = /^[a-z]([0-9a-z]){5,}$/
    return regex.test(str)
}

// min 8 letters, atleast 1 symbol, upper and lower case 
export function passwordValidator(str)
    {
        var regex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(str);  
}  

export function emailValidator(str){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(str)
}