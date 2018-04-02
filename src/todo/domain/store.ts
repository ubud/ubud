/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { Todo } from './models/todo';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ubud/ngrx';
import { TodoState } from './state';
import { FormState } from '@ubud/form/contracts/form-state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoStore extends Store {
    public isProcessing(): Observable<boolean> {
        return this.select((state: TodoState) => state.processing);
    }

    public findAllTodos(): Observable<Todo[]> {
        return this.select((state: TodoState) => state.todos);
    }

    public currentTodo(): Observable<FormState<Todo>> {
        return this.select((state: TodoState) => state.currentTodoForm);
    }

    protected selectState(): (state: any) => any {
        return (state: any) => state.todo;
    }
}