/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './todo.routes';
import { UbudTodoViewModule } from './view/module';
import { UbudTodoDomainModule } from './domain/module';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [CommonModule, UbudTodoDomainModule, UbudTodoViewModule, routing],
})
export class TodoModule {}
