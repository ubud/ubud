import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { ErrorMessages } from './contracts/error-messages';
import { Rule as RuleContract } from './contracts/rule';

export abstract class Rule implements RuleContract {
    public abstract readonly errorMessages: ErrorMessages;

    protected defaultErrorMessage = 'Attribute :attribute: is :constraint:';

    public hasError(control: AbstractControlDirective | AbstractControl): boolean {
        return !!control.errors && (!!control.dirty || !!control.touched);
    }

    public getError(control: AbstractControlDirective | AbstractControl): string | null {
        const errors = Object.keys(control.errors as any).map((field: string) => {
            if (null !== control.errors && control.errors.hasOwnProperty(field)) {
                return this.getMessage(field, control.errors[field], control);
            }

            return null;
        });

        return errors[0];
    }

    public abstract getFormControls(): { [key: string]: any };

    protected getMessage(constraint: string, params: any, control: any): string | null {
        const attribute = this.getFormControlName(control);

        if (null === attribute) {
            return null;
        }

        let message = null;

        if (this.errorMessages.hasOwnProperty(attribute)) {
            const errorMessage = this.errorMessages[attribute];

            if (errorMessage.hasOwnProperty(constraint)) {
                message = errorMessage[constraint](params);
            }
        }

        if (null === message) {
            message = this.defaultErrorMessage;
        }

        return message.replace(':attribute:', attribute).replace(':constraint:', constraint);
    }

    protected getFormControlName(control: AbstractControl): string | null {
        const formGroup = control.parent.controls as any;

        return Object.keys(formGroup).find((name: string) => control === formGroup[name]) || null;
    }
}
