import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ?
    {
        "login" : "LOGIN",
        "register" : "REGISTER",
    } : {
        "login" : "LOGIN",
        "register" : "REGISTER",
    }

export default strings 
