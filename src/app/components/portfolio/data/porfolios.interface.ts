export interface empty {}

export interface Portfolio {
    _id: string;
    image: string;
    name: string;
    url: string;
    order: string;
}

export class PorfoliosLanguage {
    public porfolios: object;
    public meta: object;
    constructor (public url: string, public swiperContainer: string ) {}
}

export class Response {
    meta: {
        code: number;
        message: string;
    };
    data: any | object;
}