import { Injectable } from '@angular/core';
import { Storage } from '../contracts/storage';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class NgxCookieAdapter implements Storage {
    private ubudCookie: any | null = null;

    public constructor(private cookieService: CookieService) {}

    private setInitial(): any {
        this.ubudCookie = this.cookieService.getObject('ubud') || {};
        this.cookieService.putObject('ubud', this.ubudCookie);
    }

    public async get<T>(key: string): Promise<T> {
        if (!this.ubudCookie) {
            this.setInitial();
            return this.get<any>(key);
        }

        return this.ubudCookie[key];
    }

    public async set<T>(key: string, value: T): Promise<void> {
        if (!this.ubudCookie) {
            this.setInitial();
            return this.set(key, value);
        }

        this.ubudCookie[key] = value;
        this.cookieService.putObject('ubud', this.ubudCookie);
    }

    public async remove(key: string): Promise<void> {
        this.set(key, undefined);
    }
}
