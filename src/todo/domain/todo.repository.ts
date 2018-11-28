import { Injectable } from '@angular/core';
import { Repository } from '@ubud/sate';
import { TodoState } from './state';
import { TodoStore } from './todo.store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { FormState } from '../../ubud/form/src/lib/contracts/form-state';

@Injectable()
export class TodoRepository extends Repository<TodoState> {
    public constructor(store: TodoStore) {
        super(store);
    }

    public isLoading$(): Observable<boolean> {
        return this.select((state: TodoState) => state.processing);
    }

    public selectCurrentTodo$(): Observable<FormState<Todo> | null> {
        return this.select((state: TodoState) => state.currentTodoForm);
    }

    selectAllTodos(): Observable<Todo[]> {
        return this.select((state: TodoState) => state.todos);
    }
}
