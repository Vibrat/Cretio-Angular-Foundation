export interface Blogs {
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

export const Api = {
    postApi: 'api/post'
};

export const SwiperContainer = {
    newsContainer: 'swiper-container-news',
};