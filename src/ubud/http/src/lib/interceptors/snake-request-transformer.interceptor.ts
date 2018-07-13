import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

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
        if (data instanceof FormData) {
            const arr: any[] = Array.from((<any>data).entries());

            return arr.reduce((acc, [key, val]) => {
                const newKey = key.replace(/([A-Z])/g, (m: string) => '_' + m.toLowerCase());
                if (val) {
                    if (val instanceof File) {
                        acc.append(newKey, val, val.name);
                    } else {
                        acc.append(newKey, val);
                    }
                }

                return acc;
            }, new FormData());
        }
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
