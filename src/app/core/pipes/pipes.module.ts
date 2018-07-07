import { NgModule} from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html.component';

@NgModule({
    imports: [],
    declarations: [ SafeHtmlPipe ],
    exports: [ SafeHtmlPipe ]
})

export class PipesModule { }
