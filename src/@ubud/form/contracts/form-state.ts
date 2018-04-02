export interface FormState<T> {
    data: T;
    pristine?: boolean;
    disabled?: boolean;
}
