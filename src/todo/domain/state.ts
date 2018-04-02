/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Todo } from './models/todo';
import { FormState } from '@ubud/form/contracts/form-state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export interface TodoState {
    processing: boolean;
    todos: Todo[];
    currentTodoForm: FormState<Todo> | null;
}



