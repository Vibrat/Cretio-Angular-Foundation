export interface Sliders {
    _id: string;
    content: string;
    order: number;
    __v: number
}

export interface Reponse {
    meta: {
        code: number;
        message: string;
    }
    data: any;
}