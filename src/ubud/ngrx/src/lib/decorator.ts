import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Type, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from './store';

// tslint:disable:function-name
export function UbudMessage(type?: string): any {
    return function (target) {
        const messageSymbol: symbol = Symbol(type || target.name);

        target.TYPE = messageSymbol;
        target.prototype.TYPE = messageSymbol;
        target.prototype.type = type ?? messageSymbol.toString().slice(7, -1);
    };
}

export function UbudStore(featureName: string): ClassDecorator {
    return function (target) {
        target.prototype.select = function (selector) {
            return this.store.select(createSelector(createFeatureSelector(featureName), selector));
        };
    };
}
