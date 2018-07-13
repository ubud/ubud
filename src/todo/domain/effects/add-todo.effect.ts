/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AddTodo } from '../messages/commands/add-todo';
import { map, switchMap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodoAdded } from '../messages/events/todo-added';
import { timer } from 'rxjs/observable/timer';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class AddTodoEffect extends Effects {
    @Effect()
    public addTodo$: Observable<Message> = this.actions$.pipe(
        ubudType(AddTodo),
        map((todo: AddTodo) => todo.todo.data),
        switchMap((todo: Todo) => {
            return timer(2000).pipe(map(() => new TodoAdded({ todo })));
        }),
    );
}
