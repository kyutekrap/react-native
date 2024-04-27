import http from './http';
import { KnowledgeCommentPost,
        KnowledgeCommentGet,
        KnowledgeDeleteArticlePost,
        KnowledgeDeleteArticleGet,
        KnowledgeDeleteCommentPost,
        KnowledgeDeleteCommentGet,
        KnowledgeGetCommentsPost,
        KnowledgeGetCommentsGet,
        KnowledgeIndexGet,
        KnowledgeItemGet,
        KnowledgeItemPost,
        KnowledgeLikeGet,
        KnowledgeLikePost,
        KnowledgeNewGet,
        KnowledgeNewPost,
        KnowledgeUnlikeGet,
        KnowledgeUnlikePost,
        KnowledgeUpdateGet,
        KnowledgeUpdatePost } from '../interface';

const endpoint = '/knowledge';

export const KnowledgeCommentService = async (payload: KnowledgeCommentPost) => {
    var response = await http.Post(endpoint + '/comment.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeCommentGet = await response.json();
        return data.success;
    } else {
        return null;
    }
}

export const KnowledgeDeleteArticleService = async (payload: KnowledgeDeleteArticlePost) => {
    var response = await http.Post(endpoint + '/delete_article.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeDeleteArticleGet = await response.json();
        return data.success;
    } else {
        return null;
    }
}

export const KnowledgeDeleteCommentService = async (payload: KnowledgeDeleteCommentPost) => {
    var response = await http.Post(endpoint + '/delete_comment.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeDeleteCommentGet = await response.json();
        return data.success;
    } else {
        return null;
    }
}

export const KnowledgeGetCommentsService = async (payload: KnowledgeGetCommentsPost) => {
    var response = await http.Post(endpoint + '/get_comments.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeGetCommentsGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const KnowledgeMainService = async () => {
    var response = await http.Get(endpoint + '/index.php', undefined);
    if (response.status === 200) {
        const data: KnowledgeIndexGet[] = await response.json();
        return [data[0]?.categories, data[1]?.articles];
    } else {
        return null;
    }
}

export const KnowledgeItemService = async (payload: KnowledgeItemPost) => {
    var response = await http.Post(endpoint + '/item.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeItemGet = await response.json();
        return data;
    } else {
        return null;
    }
}

export const KnowledgeLikeService = async (payload: KnowledgeLikePost) => {
    var response = await http.Post(endpoint + '/like.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeLikeGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const KnowledgeNewService = async (payload: KnowledgeNewPost) => {
    var response = await http.Post(endpoint + '/new.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeNewGet = await response.json();
        return data;
    } else {
        return false;
    }
}

export const KnowledgeUnlikeService = async (payload: KnowledgeUnlikePost) => {
    var response = await http.Post(endpoint + '/unlike.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeUnlikeGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const KnowledgeUpdateService = async (payload: KnowledgeUpdatePost) => {
    var response = await http.Post(endpoint + '/update.php', undefined, {
      ...payload,
    });
    if (response.status === 200) {
        const data: KnowledgeUpdateGet = await response.json();
        return data.success;
    } else {
        return false;
    }
}
