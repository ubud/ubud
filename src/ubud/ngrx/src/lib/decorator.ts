import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { MessageClass } from './types';

// tslint:disable:function-name
export function UbudMessage(type?: string): any {
    return function <T>(target: MessageClass<T>) {
        const messageSymbol: symbol = Symbol(type || target.name);

        target.TYPE = messageSymbol;
        target.prototype.TYPE = messageSymbol;
        target.prototype.type = type ?? messageSymbol.toString().slice(7, -1);
    };
}

export function UbudStore(featureName: string): ClassDecorator {
    return function (target: Function) {
        target.prototype.select = function (selector: Selector<unknown, unknown>) {
            return this.store.select(createSelector(createFeatureSelector(featureName), selector));
        };
    };
}
