export interface IApiListData {
    results: IMedia[];
}

export interface IMedia {
    id: number;
    title: string;
    name: string;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    overview: string;
}
