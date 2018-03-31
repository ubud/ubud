import { Injectable } from '@angular/core';
import { Storage as IonicStorage } from '@ionic/storage';
import { Storage } from '../contracts/storage';

@Injectable()
export class IonicStorageAdapter extends Storage {
    public constructor(private storage: IonicStorage) {
        super();
    }
    public get<T>(key: string): Promise<T> {
        return this.storage.get(key);
    }

    public set(key: string, value: any): Promise<void> {
        return this.storage.set(key, value);
    }

    public remove(key: string): Promise<void> {
        return this.storage.remove(key);
    }
}
