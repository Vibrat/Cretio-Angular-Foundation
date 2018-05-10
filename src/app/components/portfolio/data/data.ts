export const Api = {
    projectApi: 'api/heroes',
    postApi: 'api/post'
};

export const SwiperContainer = {
    portfolio:  'swiper-container-port',
};

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