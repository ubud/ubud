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
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Injectable()
export class Effects {
    public constructor(protected actions$: Actions) {
    }

    protected handleNavigation(segment: string, callback: (route: ActivatedRouteSnapshot, state: any) => Observable<any>): Observable<any> {
        const nav: any = this.actions$.ofType(ROUTER_NAVIGATION).pipe(
            filter((router: any) => {
                const url = this.buildCurrentUri(router.payload.routerState.root);
                if (null !== url) {
                    let currentUrl = url.split(';')[0];

                    const pattern = segment
                        .replace(/\:/g, ':')
                        .replace(/\/\//g, '/')
                        .replace(/\//g, '\\/');
                    const regex = new RegExp(`^${pattern}$`);
                    // const pattern = segment.replace(/\//g, '\\\/');

                    if ('/' === currentUrl.charAt(0)) {
                        currentUrl = currentUrl.substr(1);
                    }

                    return regex.test(currentUrl);
                }

                return false;
            }),
        );

        return nav.pipe(
            switchMap((action: any) => {
                const rs = action.payload.routerState;

                return of(this.collectParams(rs.root));
            }),
            catchError((e: any) => {
                console.log('Network error', e);
                return of();
            }),
        );
    }

    private buildCurrentUri(route: ActivatedRouteSnapshot): string {
        let uri = '';

        if (route.routeConfig && route.routeConfig.path) {
            uri += '/' + route.routeConfig.path;
        }

        if (route.children) {
            route.children.forEach((item: ActivatedRouteSnapshot) => {
                uri += this.buildCurrentUri(item);
            });
        }

        return uri;
    }

    private collectParams(route: ActivatedRouteSnapshot): { params: object, queryParams: object, data: object } {
        const data = {
            params: Object.assign({}, route.params || {}),
            queryParams: Object.assign({}, route.queryParams || {}),
            data: Object.assign({}, route.data || {}),
        };

        if (route.children) {
            route.children.forEach((item: ActivatedRouteSnapshot) => {
                const collected = this.collectParams(item);

                data.data = Object.assign(data.data, collected.data);
                data.params = Object.assign(data.params, collected.params);
                data.queryParams = Object.assign(data.queryParams, collected.queryParams);
            });
        }

        return data;
    }
}
