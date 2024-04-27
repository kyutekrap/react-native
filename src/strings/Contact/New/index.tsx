import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "createdMethod" : "Created method.",
        "newContact" : "NEW CONTACT METHOD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "create" : "CREATE",
        "true" : "True",
        "false" : "False"
    } : {
        "createdMethod" : "Created method.",
        "newContact" : "NEW CONTACT METHOD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "create" : "CREATE",
        "true" : "True",
        "false" : "False"
    }

export default strings
