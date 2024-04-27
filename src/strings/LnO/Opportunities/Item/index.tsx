import { systemLang } from "../../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "deleteComplete" : "Delete complete.",
        "updateComplete" : "Update complete.",
        "deleteThis" : "Delete this record?",
        "opportunity" : "OPPORTUNITY",
        "lead" : "Lead",
        "date" : "Date",
        "shortDesc" : "Short Description",
        "contactType" : "Contact Type",
        "update" : "UPDATE",
        "delete" : "DELETE"
    } : {
        "deleteComplete" : "Delete complete.",
        "updateComplete" : "Update complete.",
        "deleteThis" : "Delete this record?",
        "opportunity" : "OPPORTUNITY",
        "lead" : "Lead",
        "date" : "Date",
        "shortDesc" : "Short Description",
        "contactType" : "Contact Type",
        "update" : "UPDATE",
        "delete" : "DELETE"
    }

export default strings
