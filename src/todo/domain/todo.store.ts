import { Store } from '@ubud/sate';
import { TodoState } from './state';
import { Injectable } from '@angular/core';
import { Todo } from './models/todo';
import { FormState } from '../../ubud/form/src/lib/contracts/form-state';

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
