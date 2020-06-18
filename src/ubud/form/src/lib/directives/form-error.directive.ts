import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ubudFormError]',
})
export class FormErrorDirective {
    @ContentChild(TemplateRef) public tpl!: TemplateRef<unknown>;
}
