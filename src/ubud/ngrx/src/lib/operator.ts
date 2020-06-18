import { Type } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { OperatorFunction, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function ubudType<T>(constructor: Type<T> & { TYPE: symbol }): OperatorFunction<any, T> {
    return filter((a) => a.TYPE === constructor.TYPE);
}

function buildCurrentUri(route: ActivatedRouteSnapshot): string {
    let uri = '';

    if (route.routeConfig && route.routeConfig.path) {
        uri += '/' + route.routeConfig.path;
    }

    if (route.children) {
        route.children.forEach((item: ActivatedRouteSnapshot) => {
            uri += buildCurrentUri(item);
        });
    }

    return uri;
}

function collectParams(route: ActivatedRouteSnapshot): { params: object; queryParams: object; data: object } {
    const data = {
        params: { ...(route.params || {}) },
        queryParams: { ...(route.queryParams || {}) },
        data: { ...(route.data || {}) },
    };

    if (route.children) {
        route.children.forEach((item: ActivatedRouteSnapshot) => {
            const collected = collectParams(item);

            data.data = { ...data.data, ...collected.data };
            data.params = { ...data.params, ...collected.params };
            data.queryParams = { ...data.queryParams, ...collected.queryParams };
        });
    }

    return data;
}

export function handleNavigation<T>(segment: string): OperatorFunction<any, any> {
    return pipe(
        ofType(ROUTER_NAVIGATION),
        filter((router: any) => {
            const url = buildCurrentUri(router.payload.routerState.root);
            if (null !== url) {
                let currentUrl = url.split(';')[0];

                const pattern = segment.replace(/\:/g, ':').replace(/\/\//g, '/').replace(/\//g, '\\/');
                const regex = new RegExp(`^${pattern}$`);
                // const pattern = segment.replace(/\//g, '\\\/');

                if ('/' === currentUrl.charAt(0)) {
                    currentUrl = currentUrl.substr(1);
                }

                return regex.test(currentUrl);
            }

            return false;
        }),
        map((action: any) => collectParams(action.payload.routerState.root)),
    );
}
