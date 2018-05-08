import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = { id: 11, name: 'Mr. Nice' };
        const post =  [
            { image: {id: '1', url: '../../../assets/image/url-of-image.jpg', alt: 'Alternative name'},
              name: 'Name of post in 2018, pick right',
              link: '/link-to-post',
              date: '24th August 2017',
              des:  'Small descrption asdkjqw kasjdhiq kasdjiqywi akd 9q kadjqi ',
            },
            {   image: {id: '1', url: '../../../assets/image/url-of-image.jpg', alt: 'Alternative name'},
                name: 'Name of post in 2018, pick right',
                link: '/link-to-post',
                date: '24th August 2017',
                des:  'Small descrption asdkjqw kasjdhiq kasdjiqywi akd 9q kadjqi ',
            }, {   image: {id: '1', url: '../../../assets/image/url-of-image.jpg', alt: 'Alternative name'},
                name: 'Name of post in 2018, pick right',
                link: '/link-to-post',
                date: '24th August 2017',
                des:  'Small descrption asdkjqw kasjdhiq kasdjiqywi akd 9q kadjqi ',
            }, {   image: {id: '1', url: '../../../assets/image/url-of-image.jpg', alt: 'Alternative name'},
                name: 'Name of post in 2018, pick right',
                link: '/link-to-post',
                date: '24th August 2017',
                des:  'Small descrption asdkjqw kasjdhiq kasdjiqywi akd 9q kadjqi ',
            }, {   image: {id: '1', url: '../../../assets/image/url-of-image.jpg', alt: 'Alternative name'},
                name: 'Name of post in 2018, pick right',
                link: '/link-to-post',
                date: '24th August 2017',
                des:  'Small descrption asdkjqw kasjdhiq kasdjiqywi akd 9q kadjqi ',
            }, ];
        return {heroes, post};
    }
}