import { Component, ContentChild, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Rule } from '../contracts/rule';
import { FormErrorDirective } from '../directives/form-error.directive';

@Component({
    selector: 'ubud-form-error',
    template: `
        <ng-container *ngIf="hasError()">
            <ng-template ngFor [ngForOf]="[getError()]" [ngForTemplate]="!!message ? message.tpl : null">
                <small class="text-danger">{{ getError() }}</small>
            </ng-template>
        </ng-container>
    `,
})
export class FormErrorComponent {
    @Input()
    public control: AbstractControl | AbstractControlDirective;

    @Input()
    public rules: Rule[];

    @ContentChild(FormErrorDirective)
    public message: FormErrorDirective;

    public hasError(): boolean {
        return this.rules.some((rule: Rule) => {
            return rule.hasError(this.control);
        });
    }

    public getError(): string | null {
        for (const rule of this.rules) {
            if (rule.hasError(this.control)) {
                return rule.getError(this.control);
            }
        }

        return null;
    }
}
