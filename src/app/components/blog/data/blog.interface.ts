export interface Response {
    meta: {
        code: number;
        message: 'string';
    };
    data: Data[];
}

export interface Data {
    image: {
        url: string;
        alt: string;
        width: number;
        height: number;
    };
    meta: {
        votes: number;
        favs: number;
    };
    _id: string;
    title: string;
    author: string;
    content: string;
    seo: string[],
    hidden: boolean;
    category: string | number;
    date: string;
    comments: any[];
    order: number;
    __v: number;
}