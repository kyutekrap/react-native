import { systemLang } from "../global"

const strings = systemLang() == 'ko' ? (
    {
      "yes" : "Yes",
      "no" : "No",
      "ok" : "Ok"
    } : {
      "yes" : "Yes",
      "no" : "No",
      "ok" : "Ok"
    }
