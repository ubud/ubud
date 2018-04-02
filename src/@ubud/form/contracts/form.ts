import { FormGroup } from '@angular/forms';
import { Rule } from './rule';

export interface Form {
    formGroup: FormGroup;
    rules: Rule[];
}
