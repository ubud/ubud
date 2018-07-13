/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Effects } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
import { of } from 'rxjs/observable/of';
import { Todos } from '../messages/documents/todos';
import { Action } from '@ngrx/store';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoEffect extends Effects {
    @Effect()
    public navigateToTodos$: Observable<Action> = this.handleNavigation('todos', () => {
        return of(
            new Todos({
                todos: [new Todo({ task: 'Task 1' }), new Todo({ task: 'Task 2' })],
            }),
        );
    });
}
