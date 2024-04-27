import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "createdLead" : "Created lead.",
        "newLead" : "NEW LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "stage" : "Stage",
        "create" : "CREATE",
        "acquaintance" : "Acquaintance",
        "friend" : "Friend",
        "fwb" : "FWB",
        "exclusive" : "Exclusive",
        "brokeUp" : "Broke Up"
    } : {
        "createdLead" : "Created lead.",
        "newLead" : "NEW LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "stage" : "Stage",
        "create" : "CREATE",
        "acquaintance" : "Acquaintance",
        "friend" : "Friend",
        "fwb" : "FWB",
        "exclusive" : "Exclusive",
        "brokeUp" : "Broke Up"
    }

export default strings
