import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FormState } from '../contracts/form-state';

@Directive({
    selector: '[ubudForm]',
})
export class FormDirective {
    @Input('ubudForm')
    public set data(value: FormState<any>) {
        if (value && value.data) {
            this.formGroupDirective.form.patchValue(value.data);

            if (!value.reset) {
                this.formGroupDirective.form.updateValueAndValidity();
            }
        }

        if (value && value.reset) {
            this.formGroupDirective.form.markAsPristine();
        }

        if (value && 'undefined' !== typeof value.disabled) {
            if (true === value.disabled) {
                this.formGroupDirective.form.disable();
            } else {
                this.formGroupDirective.form.enable();
            }
        }
    }

    public constructor(private formGroupDirective: FormGroupDirective) {
    }
}
