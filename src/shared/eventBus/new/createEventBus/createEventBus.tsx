import {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useMemo,
    createContext,
    FC,
} from 'react'
import {
    ICreateEventBusOptions,
    ICreateOptimizedContextResult,
    IProviderProps,
    IUseUpdate,
} from './type'
import { IMiniStore, MiniStore } from '../miniStore'

export function createEventBus<T extends {}>(
    initialState: Partial<T> = {},
    { name = '' }: ICreateEventBusOptions = {},
): ICreateOptimizedContextResult<T> {
    const EventBusContext = createContext<IMiniStore<T> | null>(null)
    const EventBusProvider: FC<IProviderProps<T>> = ({ data, children }) => {
        if (!data && !initialState) {
            throw new Error('data or initialState is required')
        }
        const store = useMemo<IMiniStore<T>>(
            () => new MiniStore({ ...initialState, ...data } as T),
            [data],
        )
        return (
            <EventBusContext.Provider value={store}>
                {children}
            </EventBusContext.Provider>
        )
    }

    const useStoreContext = () => {
        const store = useContext(EventBusContext)
        if (!store) {
            throw new Error(
                `Can not use 'useStoreContext' outside of the '${name}Provider'`,
            )
        }
        return store
    }

    const useEventBusContext = <Result extends unknown>(
        selector: (state: T) => Result = (state) => state as never as Result,
    ): [Result, IUseUpdate<T>] => {
        const store = useStoreContext()
        const [result, setResult] = useState(() => selector(store.getState()))
        const selectorRef = useRef(selector)
        const resultRef = useRef(result)

        useLayoutEffect(() => {
            selectorRef.current = selector
            resultRef.current = result
        })

        useEffect(() => {
            const unsubscribe = store.subscribe(() => {
                const result = selectorRef.current(store.getState())
                if (resultRef.current === result) {
                    return
                }
                setResult(result)
            })
            return () => {
                unsubscribe()
            }
        }, [store])
        return [result, store.updateState.bind(store) as any]
    }

    return {
        EventBusProvider,
        useEventBusContext,
    }
}
