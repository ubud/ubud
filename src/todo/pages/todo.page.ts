/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../domains/models/todo';
import { TodoStore } from '../domains/store';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo',
    template: `
        <ubud-todo-list [todos]="todos$ | async"></ubud-todo-list>
        <ubud-todo-input></ubud-todo-input>
    `,
})
export class TodoPage {
    public todos$: Observable<Todo[]>;

    public constructor(private store: TodoStore) {
        this.todos$ = this.store.findAllTodos();
    }
}
