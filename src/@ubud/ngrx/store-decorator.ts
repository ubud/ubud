import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store } from './store';

class AnyStore extends Store<any> {
}

// tslint:disable:function-name
export function UbudStore<T extends { new(...args: any[]): any }>(featureName: string): (constructor: T) => T {
    return function (constructor: T): T {
        constructor.prototype.all = () => {
            return constructor.prototype['store'].select(createFeatureSelector(featureName));
        };
        constructor.prototype['select'] = (selector: any) => {
            return constructor.prototype['store'].select(
                createSelector(
                    createFeatureSelector(featureName),
                    selector,
                ),
            );
        };

        return constructor;
    };
}
