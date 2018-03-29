/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Effects, Action } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Todo } from './models/todo';
import { of } from 'rxjs/observable/of';
import { AllTodosFetched } from './events/all-todo-fetched';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodosEffects extends Effects {
    @Effect()
    public navigateToTodos$: Observable<Action> = this.handleNavigation('todos', () => {
        return of(new AllTodosFetched({
            todos: [
                new Todo({ task: 'Task 1' }),
                new Todo({ task: 'Task 2' }),
            ],
        }));
    });
}
