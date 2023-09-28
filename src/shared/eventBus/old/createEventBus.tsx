import React, { useContext, useSyncExternalStore } from 'react'
import { useEventBus } from './useEventBus'
import {
    IBaseState,
    IEventBusContext,
    IEventBusOptions,
    IEventBusProviderProps,
} from './type'

export function createEventBus<State extends IBaseState>(
    initialState?: Partial<State>,
    options: IEventBusOptions = {},
) {
    const EventBusContext =
        React.createContext<IEventBusContext<State>>(undefined)
    const EventBusProvider: React.FC<IEventBusProviderProps<State>> = ({
        children,
        data,
    }) => {
        const state = { ...data, ...initialState }
        const value = useEventBus<State>(state as State)
        if (data === undefined && initialState === undefined) {
            throw new Error()
        }
        return (
            <EventBusContext.Provider value={value}>
                {children}
            </EventBusContext.Provider>
        )
    }
    const defaultSelector = <Output extends unknown>(state: Output): Output =>
        state
    const useEventBusContext = <Output extends unknown = State>(
        selector: (state: State) => Output = defaultSelector as any,
    ) => {
        const data = useContext(EventBusContext)
        if (data === undefined) {
            throw new Error(
                `Cannot get data out of ${options.name ?? 'EventBus'} context`,
            )
        }
        const state = useSyncExternalStore(
            data.subscribe,
            () => selector(data.get()),
            () => selector((data || initialState) as unknown as State),
        )
        return [state, data.set] as const
    }
    return {
        EventBusProvider,
        useEventBusContext,
    }
}
