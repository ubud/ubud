/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component, Input, Output } from '@angular/core';
import { TodoStore } from '../domains/store';
import { AddTodo } from '../domains/commands/add-todo';
import { Todo } from '../domains/models/todo';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo-input',
    template: `
        <input #input />
        <button (click)="addTodo(input.value)">Add</button>
    `,
})
export class TodoInputComponent {
    public constructor(private store: TodoStore) {
    }

    public addTodo(task: string): void {
        this.store.dispatch(new AddTodo({ todo: new Todo({ task }) }));
    }
}
