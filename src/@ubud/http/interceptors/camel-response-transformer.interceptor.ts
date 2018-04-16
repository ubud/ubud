import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export class CamelResponseTransformerInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((response: HttpResponse<any>) => {
                if (response.body && response.body.data) {
                    return response.clone({
                        body: {
                            data: this.toCamel(response.body.data),
                        },
                    });
                }

                return response;
            }),
        );
    }

    private toCamel(data: any): any {
        if (data instanceof Array) {
            return data.map((item: any) => this.toCamel(item));
        }

        if (null !== data && 'object' === typeof data) {
            const transformed: any = {};
            Object.keys(data).forEach((key: any) => {
                let transformedKey = key;
                let transformedItem = data[key];

                if ('string' === typeof transformedKey) {
                    transformedKey = transformedKey.replace(/(\_\w)/g, (m: string) => m[1].toUpperCase());
                }

                if ('object' === typeof transformedItem) {
                    transformedItem = this.toCamel(transformedItem);
                }

                transformed[transformedKey] = transformedItem;
            });

            return transformed;
        }

        return data;
    }
}
