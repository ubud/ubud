export interface ErrorMessages {
    [key: string]: { [key: string]: (params: any) => string };
}
