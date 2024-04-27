export interface LnoDeletePost {
    item: string;
}

export interface LnoDeleteGet {
    success: boolean;
}

export interface LnoGetContactsPost {
    username: string;
}

export interface LnoGetContactsGet {
    id: string;
    name: string;
}

export interface LnoIndexPost {
    username: string;
}

export interface LnoIndexGet {
    lead_id: string;
    name: string;
    short_desc: string;
    stage: string;
    created_on: number;
    updated_on: number | null | '';
}

export interface LnoItemPost {
    item: string;
}

export interface LnoLead {
    name: string;
    short_desc: string;
    stage: string;
}

export interface LnoOppo {
    oppo_id: string;
    contact: string;
    short_desc: string;
    date: number;
    created_on: number;
}

export interface LnoNewPost {
    name: string;
    short_desc: string;
    stage: string;
    created_by: string;
}

export interface LnoNewGet {
    success: boolean;
    lead_id: string;
}

export interface LnoNewOppoPost {
    date: Date;
    contact: number;
    short_desc: string;
    item: string;
}

export interface LnoNewOppoGet {
    success: Boolean;
}

export interface LnoOppoDeletePost {
    item: string;
}

export interface LnoOppoDeleteGet {
    success: Boolean;
}

export interface LnoOppoInfoPost {
    item: string;
}

export interface LnoOppoInfoGet {
    date: string;
    created_on: number;
    short_desc: string;
    contact: string;
    oppo_id: string;
}

export interface LnoOppoUpdatePost {
    contact: number;
    short_desc: string;
    date: Date;
    item: string;
    id: string;
}

export interface LnoOppoUpdateGet {
    success: Boolean;
}

export interface LnoUpdatePost {
    name: string;
    short_desc: string;
    stage: string;
}

export interface LnoUpdateGet {
    success: Boolean;
}

