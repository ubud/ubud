/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component, Input } from '@angular/core';
import { Todo } from '../../domain/models/todo';
import { FormComponent } from '@ubud/form/components/form.component';
import { FormState } from '@ubud/form/contracts/form-state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo-form',
    template: `
        <form [formGroup]="form.formGroup" (ngSubmit)="onSubmit($event)" [ubudForm]="todo" novalidate>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="task">Task</label>
                        <input class="form-control" name="task" id="task" formControlName="task"/>
                        <ubud-form-error [control]="form.formGroup.controls.task" [rules]="form.rules"></ubud-form-error>
                    </div>
                </div>
            </div>

            <input type="submit" style="display: none"/>
        </form>
    `,
})
export class TodoForm extends FormComponent<Todo> {
    @Input()
    public todo: FormState<Todo>;
}
