/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Component, Input } from '@angular/core';
import { Todo } from '../domains/models/todo';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo-list',
    template: `
        <ul>
            <li *ngFor="let todo of todos">
                {{ todo.task }}
            </li>
        </ul>
    `,
})
export class TodoListComponent {
    @Input()
    public todos: Todo[] = [];
}
