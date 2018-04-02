/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { FormFactory } from 'src/@ubud/form/contracts/form-factory';
import { Form } from 'src/@ubud/form/contracts/form';
import { FormBuilder } from '@angular/forms';
import { TodoRule } from '../rules/todo.rule';
import { Injectable } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class TodoFactory implements FormFactory {
    public constructor(private fb: FormBuilder) {
    }

    public create(): Form {
        const todoRule = new TodoRule();

        return {
            formGroup: this.fb.group(todoRule.getFormControls()),
            rules: [todoRule],
        };
    }
}
