/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs/observable/of';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class Effects {
    public constructor(protected actions$: Actions) {
    }

    protected handleNavigation(segment: string, callback: (route: ActivatedRouteSnapshot, state: any) => Observable<any>): Observable<any> {
        const nav: any = this.actions$.ofType(ROUTER_NAVIGATION)
            .pipe(map((router: RouterNavigationAction) => router.payload.routerState.root.firstChild))
            .pipe(filter((route: any) => null !== route && route.routeConfig.path === segment));

        return nav
            .pipe(switchMap((a: any) => callback(a[0], a[1])))
            .pipe(catchError((e: any) => {
                console.log('Network error', e);
                return of();
            }));
    }
}
