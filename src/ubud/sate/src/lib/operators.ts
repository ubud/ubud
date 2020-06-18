import { Observable, of } from 'rxjs';
import { finalize, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Store } from './store';

export function interactWithUi(project: Observable<any>, store: Store<any>): Observable<any> {
    return of(null).pipe(
        tap(() => store.resetDefaultUiState()),
        tap(() => store.setLoading(true)),
        mergeMap(() => project),
        finalize(() => store.setLoading(false)),
    );
}
