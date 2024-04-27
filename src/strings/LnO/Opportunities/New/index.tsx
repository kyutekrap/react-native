import { systemLang } from "../../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "newOppo" : "NEW OPPORTUNITY",
        "lead" : "Lead",
        "date" : "Date",
        "shortDesc" : "Short Description",
        "contactType" : "Contact Type",
        "create" : "CREATE",
        "createdNew" : "Created new record."
    } : {
        "newOppo" : "NEW OPPORTUNITY",
        "lead" : "Lead",
        "date" : "Date",
        "shortDesc" : "Short Description",
        "contactType" : "Contact Type",
        "create" : "CREATE",
        "createdNew" : "Created new record."
    }

export default strings
