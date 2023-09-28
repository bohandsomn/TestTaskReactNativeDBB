import React from 'react'

export type IBaseState = {}
export type IEventBusState<State extends IBaseState> = {
    get: () => State
    set: (nextOrPredicate: Partial<State> | ((previous: State) => Partial<State>)) => void
    subscribe: (callback: () => void) => () => void
}
export interface IEventBusProviderProps<State extends IBaseState> extends React.PropsWithChildren {
    data?: State
}
export type IEventBusContext<State extends IBaseState> =
    | IEventBusState<State>
    | undefined
export interface IEventBusOptions {
    name?: string
}