import { systemLang } from "../../../global"

const strings = systemLang() == 'ko' ? 
    {
        "newArticle" : "NEW ARTICLE",
        "title" : "Title",
        "shortDesc" : "Short Description",
        "articleBody" : "Article Body",
        "startWriting" : "Start writing your story..",
        "category" : "Category",
        "others" : "Others",
        "categoryBig" : "CATEGORY",
        "create" : "CREATE",
        "all" : "All"
    } : {
        "newArticle" : "NEW ARTICLE",
        "title" : "Title",
        "shortDesc" : "Short Description",
        "articleBody" : "Article Body",
        "startWriting" : "Start writing your story..",
        "category" : "Category",
        "others" : "Others",
        "categoryBig" : "CATEGORY",
        "create" : "CREATE",
        "all" : "All"
    }

export default strings
