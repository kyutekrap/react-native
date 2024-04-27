import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "updateComplete" : "Update complete.",
        "updateLead" : "UPDATE LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "update" : "UPDATE",
        "acquaintance" : "Acquaintance",
        "friend" : "Friend",
        "fwb" : "FWB",
        "exclusive" : "Exclusive",
    } : {
        "updateComplete" : "Update complete.",
        "updateLead" : "UPDATE LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "update" : "UPDATE",
        "acquaintance" : "Acquaintance",
        "friend" : "Friend",
        "fwb" : "FWB",
        "exclusive" : "Exclusive",
    }

export default strings
