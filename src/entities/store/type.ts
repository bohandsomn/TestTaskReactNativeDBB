export interface IGlobalStateSuccess<Data> {
    data: Data
    error: null
    isLoading: false
}

export interface IGlobalStatePending<Data> {
    data: Data | null
    error: null
    isLoading: true
}

export interface IGlobalStateFail {
    data: null
    error: string
    isLoading: false
}

export type IGlobalState<Data> = IGlobalStateSuccess<Data> | IGlobalStatePending<Data> | IGlobalStateFail
