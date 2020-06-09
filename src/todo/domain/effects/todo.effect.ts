/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { Effects, handleNavigation, Message } from '@ubud/ngrx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todos } from '../messages/documents/todos';
import { Todo } from '../models/todo';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class TodoEffect extends Effects {
    // @Effect()
    // public navigateToTodos$: Observable<Action> = this.handleNavigation('todos', () => {
    //     return of(
    //         new Todos({
    //             todos: [new Todo({ task: 'Task 1' }), new Todo({ task: 'Task 2' })],
    //         }),
    //     );
    // });

    @Effect()
    public navigateToTodos$: Observable<Message> = this.actions$.pipe(
        handleNavigation('todos'),
        map(() => {
            return new Todos({
                todos: [new Todo({ task: 'Task 1' }), new Todo({ task: 'Task 2' })],
            });
        }),
    );
}
