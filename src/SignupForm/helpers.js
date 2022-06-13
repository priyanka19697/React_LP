

export const validateData = (values) => {
    const { email, password, rePassword } = values
    let errors = []
    const { isEmailValid, emailError } = validateEmail(email)
    const { isPasswordValid, passwordError } = validatePassword(password, rePassword)

    if (!isEmailValid) {
        errors.push(emailError)
    }
    if (!isPasswordValid) {
        errors.push(passwordError)
    }

    return errors
}

function validateEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if (email.match(emailRegex)) {
        return {
            isEmailValid: true, 
            emailError: null
        };
    } else {
        return {
            isEmailValid: false,
            emailError: "Email error invalid"
        };

    }
}

function validatePassword(password, rePassword) {
    if(password === rePassword){
        return {
            isPasswordValid: true, 
            emailError: null};
    }
    else{
        return{
            isPasswordValid: false,
            passwordError: "Password mismatch"
        }
    }
}