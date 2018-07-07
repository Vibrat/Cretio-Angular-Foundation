import { Injectable } from '@angular/core';


@Injectable()
export class Endpoints  {
    public getPorfolios = 'https://hilapy-be.herokuapp.com/hilapyportfolios';
    public getPartners = 'https://hilapy-be.herokuapp.com/hilapyportfolios';
    public getSliders = 'https://hilapy-be.herokuapp.com/sliders';

    /**
     * @property getPosts
     */

    public getPosts  = 'https://hilapy-be.herokuapp.com/posts';

}