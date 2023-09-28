import { useCallback, useRef } from 'react'
import { IEventBusState, IBaseState } from './type'

export const useEventBus = <State extends IBaseState>(initialState: State): IEventBusState<State> => {
    const ref = useRef(initialState)
    const subscribers = useRef(new Set<() => void>())
    const get = useCallback((): State => ref.current, [])
    const set = useCallback((nextOrPredicate: Partial<State> | ((previous: State) => Partial<State>)): void => {
        let next: Partial<State>
        if (typeof nextOrPredicate === 'function') {
            next = nextOrPredicate(ref.current)
        } else {
            next = nextOrPredicate
        }
        ref.current = { ...ref.current, ...next }
        subscribers.current.forEach((callback) => callback())
    }, [])
    const subscribe = useCallback((callback: () => void) => {
        subscribers.current.add(callback)
        return () => subscribers.current.delete(callback)
    }, [])
    return {
        get,
        set,
        subscribe,
    }
}