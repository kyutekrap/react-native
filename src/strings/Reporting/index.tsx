import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ? 
    {
        "reporting" : "Reporting",
        "date" : "Date",
        "overview" : "OVERVIEW",
        "analytics" : "ANALYTICS",
        "finalGrade" : "FINAL GRADE"
    } : {
        "reporting" : "Reporting",
        "date" : "Date",
        "overview" : "OVERVIEW",
        "analytics" : "ANALYTICS",
        "finalGrade" : "FINAL GRADE"
    }

export default strings
