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
import { Store } from '@ubud/ngrx/store';
import { TodoState } from './state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoStore extends Store {
    public findAllTodos(): Observable<Todo[]> {
        return this.select((state: TodoState) => state.todos);
    }

    protected selectState(): (state: any) => any {
        return (state: any) => state.todo;
    }
}
