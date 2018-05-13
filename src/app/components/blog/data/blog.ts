export class Data {
    public blogs: object;
    constructor(public url: string, public swiperContainer: string ){}
}

export interface Blogs {
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
    seo: string;
    hidden: boolean;
    date: string;
    comments: object;
    __v: number;
}
