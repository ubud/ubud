import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from './store';

// tslint:disable:function-name
export function UbudMessage(type?: string): any {
    return function<T extends Type<any>>(constructor: T): any {
        const messageSymbol: symbol = Symbol(type || constructor.name);

        return class extends constructor {
            public static readonly TYPE: symbol = messageSymbol;
            public TYPE: symbol = messageSymbol;
            public readonly type: string = type || messageSymbol.toString().slice(7, -1);
        };
    };
}

export function UbudStore(featureName: string): any {
    return function<T extends Type<Store<any>>>(constructor: T): typeof Store {
        return class extends constructor {
            protected select<R>(selector: (state: T) => R): Observable<R> {
                return this.store.select(createSelector(createFeatureSelector<T>(featureName), selector));
            }
        };
    };
}
