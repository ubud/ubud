import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class SnakeRequestTransformerInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.body) {
            return next.handle(req);
        }

        return next.handle(
            req.clone({
                body: this.toSnake(req.body),
            }),
        );
    }

    private toSnake(data: any): any {
        if (data instanceof Date || data instanceof Boolean || data instanceof String) {
            return data;
        }
        if (data instanceof Array) {
            return data.map((item: any) => this.toSnake(item));
        }

        if (null !== data && 'object' === typeof data) {
            const transformed: any = {};
            Object.keys(data).forEach((key: any) => {
                let transformedKey = key;
                let transformedItem = data[key];

                if ('string' === typeof transformedKey) {
                    transformedKey = transformedKey.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
                }

                if ('object' === typeof transformedItem) {
                    transformedItem = this.toSnake(transformedItem);
                }

                transformed[transformedKey] = transformedItem;
            });

            return transformed;
        }

        return data;
    }
}
