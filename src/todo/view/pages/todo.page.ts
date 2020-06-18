/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoStore } from 'src/todo/domain/store';

import { Todo } from '../../domain/models/todo';
import { TodoRepository } from '../../domain/todo.repository';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo',
    template: `
        <ubud-todo-list [todos]="todos$ | async"></ubud-todo-list>
        <ubud-todo-container></ubud-todo-container>
    `,
})
export class TodoPage {
    public todos$: Observable<Todo[]>;

    public constructor(private readonly todoStore: TodoStore) {
        this.todos$ = this.todoStore.findAllTodos();
    }
}
