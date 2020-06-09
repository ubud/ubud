import { ActivatedRouteSnapshot } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { OperatorFunction, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Message } from './message';
import { MessageClass } from './types';

export function ubudType<T>(constructor: MessageClass<T>): OperatorFunction<any, Message<T>> {
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
        params: Object.assign({}, route.params || {}),
        queryParams: Object.assign({}, route.queryParams || {}),
        data: Object.assign({}, route.data || {}),
    };

    if (route.children) {
        route.children.forEach((item: ActivatedRouteSnapshot) => {
            const collected = collectParams(item);

            data.data = Object.assign(data.data, collected.data);
            data.params = Object.assign(data.params, collected.params);
            data.queryParams = Object.assign(data.queryParams, collected.queryParams);
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
