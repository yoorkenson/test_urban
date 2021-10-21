import Login from "../pages/Login"
import UserPage from "../pages/UserPage"

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/',
    USER_PAGE = '/profile'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN, exact: true, component: Login
    }
]

export const priveteRoutes: IRoute[] = [
    {
        path: RouteNames.USER_PAGE, exact: true, component: UserPage
    }
]