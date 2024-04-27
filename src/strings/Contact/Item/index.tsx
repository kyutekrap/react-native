import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "updateComplete" : "Update Complete",
        "contactMethod" : "CONTACT METHOD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "createdBy" : "Created By",
        "system" : "system",
        "user" : "user",
        "update" : "UPDATE"
    } : {
        "updateComplete" : "Update Complete",
        "contactMethod" : "CONTACT METHOD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "createdBy" : "Created By",
        "system" : "system",
        "user" : "user",
        "update" : "UPDATE"
    }

export default strings
