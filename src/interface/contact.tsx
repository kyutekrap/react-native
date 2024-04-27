export interface ContactIndexPost {
    username: string;
}

export interface ContactIndexGet {
    contact_id: string;
    name: string;
    short_desc: string;
    created_by: string;
    created_on: number;
    updated_on: number;
    active: number;
}

export interface ContactItemPost {
    id: string;
}

export interface ContactItemGet {
    name: string;
    short_desc: string;
    active: number;
}

export interface ContactNewPost {
    name: string;
    short_desc: string;
    active: number;
    created_by: string; 
}

export interface ContactNewGet {
    success: Boolean;
}

export interface ContactUpdatePost {
    name: string;
    short_desc: string;
    active: number;
    id: string;
}

export interface ContactUpdateGet {
    success: Boolean;
}
