import { Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formControlName]'
})

export class FormDirective {
    @Output('output') output: EventEmitter<string> = new EventEmitter<string>();

    @Input('formGroup') form: FormGroup;

    constructor(private el: ElementRef) {}

    @HostListener('keyup', ['$event.target']) onKeyUp(event: HTMLInputElement) {
            console.log('Directive Working' + event.value);
            this.output.emit(event.value);
    }
}

