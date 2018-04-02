/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './effects/todo.effect';
import { TodoStore } from './store';
import { todoReducer } from './reducers';
import { AddTodoEffect } from './effects/add-todo.effect';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [
        StoreModule.forFeature('todo', todoReducer),
        EffectsModule.forFeature([
            TodoEffect,
            AddTodoEffect,
        ]),
    ],
    providers: [
        TodoStore,
    ],
})
export class UbudTodoDomainModule {
}
