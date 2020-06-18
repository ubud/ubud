/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Form, FormFactory } from '@ubud/form';

import { TodoRule } from '../rules/todo.rule';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class TodoFactory implements FormFactory {
    public constructor(private readonly fb: FormBuilder) {}

    public create(): Form {
        const todoRule = new TodoRule();

        return {
            formGroup: this.fb.group(todoRule.getFormControls()),
            rules: [todoRule],
        };
    }
}
