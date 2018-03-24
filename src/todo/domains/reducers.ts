/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Reducer } from '@ubud/ngrx';
import { TodoState } from './state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoReducer extends Reducer {
    protected state: TodoState = {
        todos: [],
    };
}
