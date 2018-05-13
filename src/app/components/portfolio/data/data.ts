export class Data {
    public porfolios: object;
    constructor (public url: string, public swiperContainer: string ) {}
}

export interface Portfolio {
    image: {
        id: number;
        url: string;
        alt: string;
    };
    name: string;
    link: string;
    date: string;
    des:  string;
}