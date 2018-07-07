export interface Logos {
    _id: string;
    name: string;
    image: string;
    url: string;
    order: string;
    __v: number;
}

export interface Response {
    meta: {
        code: number;
        message: string;
    };
    data: any;
}