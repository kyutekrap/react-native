import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ?
    {
        "updateComplete" : "Update complete.",
        "profileDetails" : "Profile Details",
        "editAlias" : "EDIT ALIAS",
        "resetPassword" : "RESET PASSWORD",
        "alias" : "Alias",
        "password" : "Password",
        "delete" : "Delete",
        "deleteBig" : "DELETE",
        "logout" : "Logout",
        "logoutBig" : "LOGOUT"
    } : {
        "updateComplete" : "Update complete.",
        "profileDetails" : "Profile Details",
        "editAlias" : "EDIT ALIAS",
        "resetPassword" : "RESET PASSWORD",
        "alias" : "Alias",
        "password" : "Password",
        "delete" : "Delete",
        "deleteBig" : "DELETE",
        "logout" : "Logout",
        "logoutBig" : "LOGOUT"
    }

export default strings
