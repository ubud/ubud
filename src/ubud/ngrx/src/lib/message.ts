// @dynamic
export abstract class Message<S = any, P extends Message<S> = any> {
    public static TYPE: symbol;
    public readonly TYPE!: symbol;

    public abstract handle(state: S): S;

    public constructor(data?: Pick<P, Exclude<keyof P, 'handle' | 'TYPE'>>) {
        Object.assign(this, data || {});
    }
}
