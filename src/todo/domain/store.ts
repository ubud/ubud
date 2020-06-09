/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { FormState } from '@ubud/form';
import { Store, UbudStore } from '@ubud/ngrx';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoState } from './state';
import { Injectable } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@UbudStore('todo')
@Injectable()
export class TodoStore extends Store<TodoState> {
    public isProcessing(): Observable<boolean> {
        return this.select((state: TodoState) => state.processing);
    }

    public findAllTodos(): Observable<Todo[]> {
        return this.select((state: TodoState) => state.todos);
    }

    public currentTodo(): Observable<FormState<Todo> | null> {
        return this.select((state: TodoState) => state.currentTodoForm);
    }
}
