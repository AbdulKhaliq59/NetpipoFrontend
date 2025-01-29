export interface Episode {
    id: string;
    name: string;
    air_date: string;
    episode: string; // e.g., "S01E01"
}

export interface PaginationInfo {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
}

export interface EpisodesResponse {
    episodes: {
        info: PaginationInfo;
        results: Episode[];
    };
}