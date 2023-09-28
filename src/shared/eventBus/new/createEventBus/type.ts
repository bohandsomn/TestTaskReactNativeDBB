import { FC, PropsWithChildren } from 'react'
import { IMiniStore } from '../miniStore'

export interface ICreateOptimizedContextResult<T> {
    EventBusProvider: FC<IProviderProps<T>>
    useEventBusContext: <Result extends unknown>(selector?: (state: T) => Result) => [Result, IUseUpdate<T>]
}

export interface ICreateEventBusOptions {
    name?: string
}

export interface IProviderProps<T> extends PropsWithChildren {
    data?: Partial<T>
}

export type IUseUpdate<T> = IMiniStore<T>['updateState']
