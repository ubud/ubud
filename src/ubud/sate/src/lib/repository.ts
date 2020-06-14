import { Observable } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';

import { UiState } from './states';
import { Store } from './store';

export abstract class Repository<T> {
    protected constructor(private readonly store: Store<T>) {}

    public select<R>(project: (state: T) => R): Observable<R> {
        return this.store.state$.pipe(map(project), distinctUntilChanged());
    }

    public selectOnce<R>(project: (state: T) => R): Observable<R> {
        return this.select(project).pipe(take(1));
    }

    public isLoading$(): Observable<boolean> {
        return this.select((state) => (state as T & { ui: { loading: boolean } }).ui.loading);
    }

    public isError$(): Observable<boolean> {
        return this.select((state) => (state as T & { ui: { error: boolean } }).ui.error);
    }

    public selectMessage$(): Observable<string> {
        return this.select((state) => (state as T & { ui: { message: string } }).ui.message);
    }

    public selectUi$<R extends UiState>(): Observable<R> {
        return this.select((state) => (state as T & { ui: any }).ui);
    }
}
