export abstract class Storage {
    public abstract get<T>(key: string): Promise<T>;

    public abstract set(key: string, value: any): Promise<void>;

    public abstract remove(key: string): Promise<void>;
}
