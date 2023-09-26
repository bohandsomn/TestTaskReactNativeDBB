import type { NavigationProp, useNavigation } from '@react-navigation/native'
import { INavigation } from './type'

type IUseNavigationResult = ReturnType<
    typeof useNavigation<
        NavigationProp<
            Record<string, any>
        >
    >
>

export class Navigation<Route extends string> implements INavigation<Route> {
    constructor(
        private readonly navigation: IUseNavigationResult
    ) { }

    goTo(route: string): void
    goTo(route: string, params: Record<string, unknown>): void
    goTo(route: unknown, params?: unknown): void {
        if (typeof route !== 'string') {
            throw new Error(`Route ${route} is not a string`)
        }
        if (params === undefined) {
            return this.navigation.navigate(route)
        }
        if (typeof params !== 'object' || params === null) {
            throw new Error(`Params ${params} is not an object`)
        }
        return this.navigation.navigate(route, params)
    }

    goBack(): void {
        return this.navigation.goBack()
    }

    goStart(): void {
        let canGoBack = this.navigation.canGoBack()
        while (canGoBack) {
            canGoBack = this.navigation.canGoBack()
            this.navigation.goBack()
        }
    }

    updateParams(params: Record<string, unknown>): void {
        this.navigation.setParams(params)
    }
}