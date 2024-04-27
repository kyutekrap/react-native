export interface ReportingIndexPost {
    username: string;
}

export interface ReportingIndexGet {
    love_doctor: ReportingLoveDoctor[];
    overview: string;
    analytics: ReportingAnalytics[];
}

export interface ReportingLoveDoctor {
    perc: number;
    grade: string;
    message: string;
}

export interface ReportingAnalytics {
    year: number;
    month: number;
    lead: number;
    oppo: number;
    impressions: number;
}
