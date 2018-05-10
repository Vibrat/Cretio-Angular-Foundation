export const Api = {
    projectApi: 'api/heroes',
    postApi: 'api/post'
};

export interface News {
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

export interface Test {
    userID: number;
    id: number;
    title: string;
    body: string;
}

export const SwiperContainer = {
    mainContainer: 'swiper-container',
    newsContainer: 'swiper-container-news',
    portfolio:  'swiper-container-port',
    logos: 'swiper-container-logos'
};
