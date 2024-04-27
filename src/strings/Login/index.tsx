import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ? 
    {
        "doubleCheck" : "Double-check!",
        "networkFailed" : "Network failed.",
        "logIn" : "Log in",
        "username" : "Username",
        "password" : "Password",
        "logInBig" : "LOG IN"
    } : {
        "doubleCheck" : "Double-check!",
        "networkFailed" : "Network failed.",
        "logIn" : "Log in",
        "username" : "Username",
        "password" : "Password",
        "logInBig" : "LOG IN"
    }

export default strings
