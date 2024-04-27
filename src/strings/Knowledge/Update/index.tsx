import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "updateComplete" : "Update complete.",
        "title" : "Title",
        "shortDesc" : "Short Description",
        "articleBody" : "Article Body",
        "category" : "Category",
        "others" : "Others",
        "categoryBig" : "CATEGORY",
        "update" : "UPDATE",
        "all": "All",
        "editArticle" : "EDIT ARTICLE",
        "startWriting" : 'Start writing your story..'
    } : {
        "updateComplete" : "Update complete.",
        "title" : "Title",
        "shortDesc" : "Short Description",
        "articleBody" : "Article Body",
        "category" : "Category",
        "others" : "Others",
        "categoryBig" : "CATEGORY",
        "update" : "UPDATE",
        "all": "All",
        "editArticle" : "EDIT ARTICLE",
        "startWriting" : 'Start writing your story..'
    }

export default strings
