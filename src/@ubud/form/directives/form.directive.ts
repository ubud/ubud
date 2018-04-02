import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { FormState } from '../contracts/form-state';

@Directive({
    selector: '[ubudForm]',
})
export class FormDirective {
    @Input('ubudForm')
    public set data(value: FormState<any>) {
        const formGroup = this.formGroupDirective;

        if (value) {
            if (value.data) {
                this.formGroupDirective.form.patchValue(value.data);
            }

            if (value.pristine) {
                Object.values(formGroup.form.controls).forEach((control: AbstractControl) => {
                    control.reset(control.value);
                });
            }

            if ('undefined' !== typeof value.disabled) {
                if (true === value.disabled) {
                    this.formGroupDirective.form.disable();
                } else {
                    this.formGroupDirective.form.enable();
                }
            }
        }
    }

    public constructor(private formGroupDirective: FormGroupDirective) {
    }
}
