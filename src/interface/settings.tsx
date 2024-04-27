export interface SettingsIndexPost {
    username: string;
}

export interface SettingsIndexGet {
    alias: string;
}

export interface SettingsUpdateAliasPost {
    alias: string;
    username: string;
}

export interface SettingsUpdateAliasGet {
    success: boolean;
}

export interface SettingsUpdatePasswordPost {
    username: string;
    password: string;
}

export interface SettingsUpdatePasswordGet {
    success: boolean;
}

export interface SettingsDeletePost {
    username: string;
}

export interface SettingsDeleteGet {
    success: boolean;
}
