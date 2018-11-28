import { BehaviorSubject, Observable } from 'rxjs';
import { UiState } from './states';

export abstract class Store<T> {
    private state: BehaviorSubject<Readonly<T>>;
    private readonly initialState: T;

    protected constructor(initialStates: T) {
        this.initialState = initialStates;
        this.resetState();
    }

    public get state$(): Observable<Readonly<T>> {
        return this.state.asObservable();
    }

    public get name(): string {
        return this.constructor.name;
    }

    public setState(stateFn: (state: Readonly<T>) => T): void {
        const prevState = this.value();
        const newState = stateFn(this.value());

        if (prevState === newState) {
            throw new Error(`Store ${this.name} should be immutable.`);
        }

        if (!this.state) {
            this.state = new BehaviorSubject(newState);

            return;
        }

        this.state.next(newState);
    }

    public setLoading(loading: boolean): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: { message: '', error: false, loading: loading } };
        });
    }

    public setError(message: string): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: { ...state.ui, message: message, error: true } };
        });
    }

    public resetUi(): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: (<any>this.initialState).ui };
        });
    }

    public resetState(): void {
        this.setState(() => Object.assign({}, this.initialState));
    }

    private value(): T {
        if (this.state) {
            return this.state.getValue();
        }

        return null;
    }
}
