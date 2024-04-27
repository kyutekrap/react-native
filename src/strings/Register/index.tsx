import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ?
    {
        "usernameTaken" : "Username taken!",
        "networkFailed" : "Network failed.",
        "register" : "Register",
        "username" : "Username",
        "password" : "Password",
        "registerBig" : "REGISTER",
        "bySigning" : "By signing up, you agree to our",
        "terms" : "Terms of Service and Privacy Policy.",
    } : {
        "usernameTaken" : "Username taken!",
        "networkFailed" : "Network failed.",
        "register" : "Register",
        "username" : "Username",
        "password" : "Password",
        "registerBig" : "REGISTER",
        "bySigning" : "By signing up, you agree to our",
        "terms" : "Terms of Service and Privacy Policy.",
    }

export default strings
