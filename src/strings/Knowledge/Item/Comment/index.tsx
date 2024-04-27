import { systemLang } from "../../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "deleteThis" : "Delete this comment?",
        "type" : "Type.."
    } : {
        "deleteThis" : "Delete this comment?",
        "type" : "Type.."
    }

export default strings
