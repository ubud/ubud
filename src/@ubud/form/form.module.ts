import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './components/form-error.component';
import { FormErrorDirective } from './directives/form-error.directive';
import { FormDirective } from './directives/form.directive';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FormErrorComponent,
        FormErrorDirective,
        FormDirective,
    ],
    exports: [
        ReactiveFormsModule,
        FormErrorComponent,
        FormErrorDirective,
        FormDirective,
    ],
})
export class UbudFormModule {
}
