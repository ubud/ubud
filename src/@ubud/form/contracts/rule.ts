import { ErrorMessages } from './error-messages';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

export interface Rule {
    readonly errorMessages: ErrorMessages;

    hasError(control: AbstractControlDirective | AbstractControl): boolean;
    getError(control: AbstractControlDirective | AbstractControl): string | null;
}
