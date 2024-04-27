export interface KnowledgeCommentPost {
    content: string;
    username: string;
    item: string;
}

export interface KnowledgeCommentGet {
    success: Boolean;
}

export interface KnowledgeDeleteArticlePost {
    item: string;
}

export interface KnowledgeDeleteArticleGet {
    success: Boolean;
}

export interface KnowledgeDeleteCommentPost {
    id: number;
}

export interface KnowledgeDeleteCommentGet {
    success: Boolean;
}

export interface KnowledgeGetCommentsPost {
    item: string;
}

export interface KnowledgeGetCommentsGet {
    content: string;
    created_on: number;
    author: string;
    username: string;
    id: number;
}

interface KnowledgeArticles {
    id: string,
    category: string,
    title: string, 
    short_desc: string,
    author: string,
    created_on: number,
    updated_on: number | null | "",
    likes: number,
    comments: number
}

export interface KnowledgeIndexGet {
    categories: string[];
    articles: KnowledgeArticles[];
}

export interface KnowledgeItemPost {
    item: string;
    username: string;
}

export interface KnowledgeItemGet {
    title: string;
    created_on: number;
    updated_on: number | null | '';
    author: string;
    body: string;
    created_by: string;
    short_desc: string;
    category: string;
    user_like: boolean;
}

export interface KnowledgeLikePost {
    username: string;
    article: string;
}

export interface KnowledgeLikeGet {
    success: boolean;
}

export interface KnowledgeNewPost {
    title: string;
    short_desc: string;
    body: string;
    category: string;
    username: string;
}

export interface KnowledgeNewGet {
    success: boolean;
    created_on: number;
    author: string;
    id: string;
}

export interface KnowledgeUnlikePost {
    username: string;
    article: string;
}

export interface KnowledgeUnlikeGet {
    success: Boolean;
}

export interface KnowledgeUpdatePost {
    name: string;
    short_desc: string;
    body: string;
    category: string;
    item: string;
}

export interface KnowledgeUpdateGet {
    success: Boolean;
}
