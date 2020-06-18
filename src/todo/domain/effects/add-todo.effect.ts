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
import { Effects, Message, ubudType } from '@ubud/ngrx';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { AddTodo } from '../messages/commands/add-todo';
import { TodoAdded } from '../messages/events/todo-added';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class AddTodoEffect extends Effects {
    @Effect()
    public addTodo$: Observable<Message> = this.actions$.pipe(
        ubudType(AddTodo),
        map((todo: AddTodo) => todo.todo.data),
        delay(2000),
        map((todo) => new TodoAdded({ todo })),
    );
}
