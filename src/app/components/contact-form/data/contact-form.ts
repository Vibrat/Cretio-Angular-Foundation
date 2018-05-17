export class Data {
    public contact: object;
    public media: object | Media;
    public meta: object;
    constructor (public url_contact: string, public url_media: string ) {}
}

export class Media {
    meta: {
        code: number;
    };
    data: {
        facebook: {
            id: number;
            url: string;
            order: number
        };
        instagram: {
            id: number;
            url: string;
            order: number
        }
    };
}

export const Entry = {
    email: 'you@gmail.com',
    text_subscribe: 'Subscribe',
    text_contact: 'Contact us',
    text_follow: 'Follow us'
};

