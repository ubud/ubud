import { Component, ContentChild, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Rule } from '../contracts/rule';
import { FormErrorDirective } from '../directives/form-error.directive';

@Component({
    selector: 'ubud-form-error',
    template: `
        <ng-container *ngIf="rule.hasError(control)">
            <ng-template ngFor [ngForOf]="[rule.getError(control)]" [ngForTemplate]="!!message ? message.tpl : null">
                <small class="text-danger">{{ rule.getError(control) }}</small>
            </ng-template>
        </ng-container>
    `,
})
export class FormErrorComponent {
    @Input()
    public control: AbstractControl | AbstractControlDirective;

    @Input()
    public rule: Rule;

    @ContentChild(FormErrorDirective)
    public message: FormErrorDirective;
}
