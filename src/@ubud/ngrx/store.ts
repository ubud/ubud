/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Injectable } from '@angular/core';
import { createSelector, MemoizedSelector, Store as NgrxStore } from '@ngrx/store';
import { Message } from '@ubud/ngrx/message';
import { Observable } from 'rxjs/Observable';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export abstract class Store {
    public constructor(protected store: NgrxStore<any>) {}

    public dispatch(action: Message): void {
        this.store.dispatch(action);
    }

    protected select<Result, T>(selector: (state: T) => any|MemoizedSelector<any, any>): Observable<Result> {
        if (selector instanceof Function) {
            return this.store.select(
                createSelector(
                    this.selectState(),
                    selector,
                ),
            );
        }

        return this.store.select(selector);
    }

    protected abstract selectState(): (state: any) => any;
}
