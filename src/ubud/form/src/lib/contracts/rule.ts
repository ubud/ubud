import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { ErrorMessages } from './error-messages';

export interface Rule {
    readonly errorMessages: ErrorMessages;

    hasError(control: AbstractControlDirective | AbstractControl): boolean;

    getError(control: AbstractControlDirective | AbstractControl): string | null;

    getFormControls(): { [key: string]: any };
}
