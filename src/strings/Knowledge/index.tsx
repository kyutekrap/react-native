import { systemLang } from "../../global"

const strings = systemLang() == 'ko' ? 
    {
        "knowledgeBase" : "Knowledge Base",
        "allResults" : "ALL RESULTS",
        "category": "Category"
    } : {
        "knowledgeBase" : "Knowledge Base",
        "allResults" : "ALL RESULTS",
        "category": "Category"
    }

export default strings
