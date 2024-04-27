import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ?
    {
        "registerBig" : "REGISTER",
        "register" : "Register",
        "username" : "Username",
        "password" : "Password"
    } : {
        "registerBig" : "REGISTER",
        "register" : "Register",
        "username" : "Username",
        "password" : "Password"
    }

export default strings
