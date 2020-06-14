import { EventEmitter, Input, Output } from '@angular/core';

import { Form } from '../contracts/form';
import { FormValue } from '../contracts/form-value';

export abstract class FormComponent<T> {
    @Output() public submitted: EventEmitter<FormValue<T>> = new EventEmitter();
    @Output() public valueChanges: EventEmitter<FormValue<T>> = new EventEmitter();

    public _form: Form;

    public get form(): Form {
        return this._form;
    }

    @Input('form')
    public set form(form: Form) {
        form.formGroup.valueChanges.subscribe(() => {
            this.valueChanges.emit(this.getValue());
        });
        this._form = form;
    }

    public submit(): void {
        this.onSubmit();
    }

    public onSubmit(): void {
        const formGroup = this.form.formGroup;

        Object.keys(formGroup.controls).forEach((key: string) => {
            formGroup.controls[key].markAsDirty();
        });

        this.submitted.emit({ data: formGroup.value, status: formGroup.status });
    }

    protected getValue(): FormValue<T> {
        const formGroup = this.form.formGroup;

        return { data: formGroup.value, status: formGroup.status };
    }
}
