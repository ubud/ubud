import { BehaviorSubject, Observable } from 'rxjs';

import { UiState } from './states';

export abstract class Store<T> {
    private state!: BehaviorSubject<Readonly<T>>;
    private readonly initialState: T;

    protected constructor(initialStates: T) {
        this.initialState = initialStates;
        this.state = new BehaviorSubject(this.initialState);
    }

    public setState(stateFn: (state: Readonly<T>) => T): void {
        const prevState = this.value();
        const newState = stateFn(this.value());

        if (prevState === newState) {
            throw new Error(`Store ${this.name} should be immutable.`);
        }

        this.state.next(newState);
    }

    protected value(): T {
        return this.state.getValue();
    }

    public get state$(): Observable<Readonly<T>> {
        return this.state.asObservable();
    }

    public get name(): string {
        return this.constructor.name;
    }

    public setLoading(loading: boolean): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: { ...state.ui, message: '', error: false, loading } };
        });
    }

    public setError(message: string): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: { ...state.ui, message, error: true } };
        });
    }

    public resetDefaultUiState(): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: { ...state.ui, message: '', error: false, loading: false } };
        });
    }

    public resetUi(): void {
        this.setState((state: (T & { ui: UiState }) & any) => {
            return { ...state, ui: (this.initialState as any).ui };
        });
    }

    public resetState(): void {
        this.setState(() => ({ ...this.initialState }));
    }
}
