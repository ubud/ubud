import { Observable } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { Store } from './store';

export abstract class Repository<T> {
    protected constructor(private store: Store<T>) {}

    public select<R>(project: (state: T) => R): Observable<R> {
        return this.store.select(project).pipe(distinctUntilChanged());
    }

    public selectOnce<R>(project: (state: T) => R): Observable<R> {
        return this.select(project).pipe(take(1));
    }
}
