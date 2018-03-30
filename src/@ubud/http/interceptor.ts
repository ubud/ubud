import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class HttpInterceptorHandler implements HttpHandler {
    public constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}

    public handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.interceptor.intercept(req, this.next);
    }
}
