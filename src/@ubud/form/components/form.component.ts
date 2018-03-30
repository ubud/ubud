import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '../contracts/form';
import { FormValue } from '../contracts/form-value';

export abstract class FormComponent<T> implements OnInit {
    @Input()
    public form: Form;

    @Output()
    public submitted: EventEmitter<FormValue<T>> = new EventEmitter();

    @Output()
    public valueChanges: EventEmitter<FormValue<T>> = new EventEmitter();

    public ngOnInit(): void {
        this.form.formGroup.valueChanges.subscribe(() => {
            this.valueChanges.emit(this.getValue());
        });
    }

    public submit(): void {
        this.onSubmit();
    }

    public onSubmit(): void {
        const formGroup = this.form.formGroup;

        Object.keys(formGroup.controls).forEach((key: string) => {
            formGroup.controls[ key ].markAsDirty();
        });

        this.submitted.emit({ data: formGroup.value, status: formGroup.status });
    }

    protected getValue(): FormValue<T> {
        const formGroup = this.form.formGroup;

        return { data: formGroup.value, status: formGroup.status };
    }
}

