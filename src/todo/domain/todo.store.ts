import { Injectable } from '@angular/core';
import { Store } from '@ubud/sate';

import { FormState } from '../../ubud/form/src/lib/contracts/form-state';

import { Todo } from './models/todo';
import { TodoState } from './state';

@Injectable({ providedIn: 'root' })
export class TodoStore extends Store<TodoState> {
    public constructor() {
        super({ todos: [], processing: false, currentTodoForm: null });
    }

    public addTodo(todo: FormState<Todo>): void {
        this.setState((state: TodoState) => {
            return { ...state, todos: [...state.todos, todo.data] };
        });
    }
}
