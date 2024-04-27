import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "like" : "Like",
        "unlike" : "Unlike",
        "publishedOn" : "Published on",
        "by" : "by",
        "lastUpdated" : "Last Updated on",
        "likes" : "Likes",
        "comments" : "COMMENTS",
        "update" : "UPDATE"
    } : {
        "like" : "Like",
        "unlike" : "Unlike",
        "publishedOn" : "Published on",
        "by" : "by",
        "lastUpdated" : "Last Updated on",
        "likes" : "Likes",
        "comments" : "COMMENTS",
        "update" : "UPDATE"
    }

export default strings
