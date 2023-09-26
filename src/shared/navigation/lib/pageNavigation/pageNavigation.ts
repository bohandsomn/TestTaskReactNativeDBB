import { RouteProp, useRoute } from '@react-navigation/native'
import { IPageNavigation } from './type'

type IUseRouteResult = ReturnType<
    typeof useRoute<
        RouteProp<
            Record<string, any>
        >
    >
>

export class PageNavigation<Route> implements IPageNavigation<Route> {
    constructor(
        private readonly route: IUseRouteResult
    ) { }

    get pageName(): Route {
        return this.route.name as Route
    }

    get options(): Record<string, unknown> {
        return this.route.params as Record<string, unknown>
    }
}