import { IMiniStore } from './type'

export class MiniStore<T> implements IMiniStore<T> {
    private readonly subscriptions: Set<() => void> = new Set()

    constructor(
        private state: T
    ) { }

    getState(): T {
        return this.state
    }

    updateState(state: Partial<T>): void
    updateState(callback: (state: T) => Partial<T>): void
    updateState(stateOrCallback: unknown): void {
        let state: T
        if (typeof stateOrCallback === 'function') {
            state = stateOrCallback(this.state)
        } else if (typeof stateOrCallback === 'object' && stateOrCallback !== null) {
            state = stateOrCallback as T
        } else {
            throw new Error(`The new state ${stateOrCallback} is neither a state nor a callback`)
        }
        this.state = { ...this.state, ...state }
        this.subscriptions.forEach((callback) => callback())
    }

    subscribe(callback: () => void): () => void {
        this.subscriptions.add(callback)
        return () => {
            this.subscriptions.delete(callback)
        }
    }
}