import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? (
    {
        "deletedIt" : "Deleted it.",
        "areYou" : "Are you sure to delete?",
        "lead" : "LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "update" : "UPDATE",
        "opportunities" : "OPPORTUNITIES",
        "delete" : "DELETE"
    } : {
        "deletedIt" : "Deleted it.",
        "areYou" : "Are you sure to delete?",
        "lead" : "LEAD",
        "name" : "Name",
        "shortDesc" : "Short Description",
        "active" : "Active",
        "update" : "UPDATE",
        "opportunities" : "OPPORTUNITIES",
        "delete" : "DELETE"
    }

    export default strings
