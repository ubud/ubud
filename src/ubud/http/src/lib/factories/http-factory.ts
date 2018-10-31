import { HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UbudHttpConfig } from '../common/config';

class UbudHttpInterceptingHandler implements HttpHandler {
    private chain: HttpHandler | null = null;

    constructor(private backend: HttpBackend, private interceptors: HttpInterceptor[]) {}

    public handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (!this.chain) {
            this.chain = this.interceptors.reduceRight((next: HttpHandler, interceptor: HttpInterceptor) => {
                return {
                    handle: (req: HttpRequest<any>) => interceptor.intercept(req, next),
                };
            }, this.backend);
        }

        return this.chain.handle(request);
    }
}

export function ubudHttpHandlerFactory(
    handler: HttpHandler,
    interceptors: HttpInterceptor[] = [],
    config: UbudHttpConfig = {},
): HttpHandler {
    const baseInterceptor: HttpInterceptor = {
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
            return next.handle(req.clone({ url: config.url + req.url }));
        },
    };

    return new UbudHttpInterceptingHandler(handler, [baseInterceptor, ...interceptors]);
}
