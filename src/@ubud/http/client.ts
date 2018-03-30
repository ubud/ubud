import { Injector } from '@angular/core';
import {
    HttpClient as AngularHttpClient,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'qs';
import { HttpInterceptorHandler } from './interceptor';

export abstract class HttpClient {
    public constructor(public baseUri: string, protected http: AngularHttpClient, protected injector: Injector) {
    }

    public get<T>(url: string, params?: any): Observable<T> {
        const request = new HttpRequest('GET', url, {
            params: new HttpParams({
                fromString: stringify(params),
            }),
        });

        return this.request(request);
    }

    public post<T>(url: string, body: any): Observable<T> {
        const request = new HttpRequest('POST', url, body);

        return this.request(request);
    }

    public put<T>(url: string, body: any): Observable<T> {
        const request = new HttpRequest('PUT', url, body);

        return this.request(request);
    }

    public patch<T>(url: string, body: any): Observable<T> {
        const request = new HttpRequest('PATCH', url, body);

        return this.request(request);
    }

    public delete<T>(url: string): Observable<T> {
        const request = new HttpRequest('DELETE', url);

        return this.request(request);
    }

    public request<T>(request: HttpRequest<any>): Observable<T> {
        const interceptorTokenFn = (<any> this)['getInterceptorToken'];
        const newRequest = request.clone({ url: this.baseUri + request.url });

        if ('function' === typeof interceptorTokenFn) {
            const interceptors = this.injector.get(interceptorTokenFn(), []);
            const handler = interceptors.reduceRight(
                (next: HttpHandler, interceptor: HttpInterceptor) => new HttpInterceptorHandler(next, interceptor),
                {
                    handle: (httRequest: HttpRequest<any>): Observable<HttpEvent<any>> => {
                        return this.handle(httRequest);
                    },
                },
            );

            return handler.handle(newRequest);
        }

        return this.handle(newRequest);
    }

    protected handle(request: HttpRequest<any>): Observable<any> {
        return this.http.request(request.method, request.url, { ...<any> request, observe: 'response' });
    }
}
