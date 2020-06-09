/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component } from '@angular/core';
import { Form, FormState, FormValue } from '@ubud/form';
import { Todo } from '../../domain/models/todo';
import { TodoFactory } from '../../factories/todo.factory';
import { Observable } from 'rxjs';
import { TodoStore } from '../../domain/store';
import { Todos } from 'src/todo/domain/messages/documents/todos';
import { AddTodo } from 'src/todo/domain/messages/commands/add-todo';
import { FormBuilder } from '@angular/forms';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-todo-container',
    template: `
        <ubud-todo-form
            #todoForm
            [form]="form"
            [todo]="currentTodo$ | async"
            (valueChanges)="readyForSubmit = 'VALID' === $event.status"
            (submitted)="onSubmit($event)"
        >
        </ubud-todo-form>
        <button class="btn btn-success" [disabled]="!readyForSubmit || (processing$ | async)" (click)="todoForm.submit()">
            <ng-container *ngIf="processing$ | async; else buttonLabel">
                <ubud-loader-component></ubud-loader-component>
            </ng-container>
            <ng-template #buttonLabel>Add Todo</ng-template>
        </button>
    `,
    providers: [TodoFactory],
})
export class TodoContainer {
    public processing$: Observable<boolean>;
    public currentTodo$: Observable<FormState<Todo> | null>;

    public form: Form;
    public readyForSubmit: boolean = false;

    public constructor(formFactory: TodoFactory, private todoStore: TodoStore) {
        this.form = formFactory.create();
        this.processing$ = this.todoStore.isProcessing();
        this.currentTodo$ = this.todoStore.currentTodo();
    }

    public onSubmit(todo: FormValue<Todo>): void {
        if ('VALID' === todo.status) {
            this.todoStore.dispatch(
                new AddTodo({
                    todo,
                }),
            );
        }
    }
}
