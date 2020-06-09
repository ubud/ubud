import { Injectable } from '@angular/core';
import { Store as NgrxStore } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable()
export abstract class Store<S> {
    constructor(protected store: NgrxStore<S>) {}

    public dispatch(message: Message<S>): void {
        this.store.dispatch(<any>message);
    }

    public select<Result>(selector: (state: S) => Result): Observable<Result> {
        throw new Error('Store should has select function');
    }
}
