export interface IMiniStore<T> {
    getState(): T
    updateState(state: Partial<T>): void
    updateState(callback: (state: T) => Partial<T>): void
    subscribe(callback: () => void): () => void
}