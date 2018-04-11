/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store as NgrxStore } from '@ngrx/store';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export abstract class Store<T> {
    public constructor(protected store: NgrxStore<any>) {
    }

    public dispatch(message: Message<T>): void {
        this.store.dispatch(message);
    }

    protected all(): Observable<T> {
        throw Error('Store should has all function');
    }

    protected select<Result>(selector: (state: T) => Result): Observable<Result> {
        throw new Error('Store should has select function');
    }
}

export function storeFactory(featureName: string): typeof Store {
    return class<T> extends Store<T> {
        protected all(): Observable<T> {
            return this.store.select(createFeatureSelector(featureName));
        }

        protected select<R>(selector: (state: T) => R): Observable<R> {
            return this.store.select(
                createSelector(
                    createFeatureSelector<T>(featureName),
                    selector,
                ),
            );
        }
    };
}
