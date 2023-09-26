export interface INavigation<Route extends string> {
    goTo(route: Route): void
    goTo(route: Route, params: Record<string, unknown>): void
    goBack(): void
    goStart(): void
    updateParams(params: Record<string, unknown>): void
}