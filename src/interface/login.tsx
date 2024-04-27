export interface LoginPost {
    username: string;
    password: string;
}

export interface LoginGet {
    success: Boolean;
    error?: string;
}

// export interface RecoverPost {
//     email: string;
// }

// export interface RecoverGet {
//     success: boolean;
// }

export interface RegisterPost {
    username: string; 
    password: string;
}

export interface RegisterGet {
    success: Boolean;
}

