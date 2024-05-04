import { createBrowserRouter } from 'react-router-dom'
import { routes as homeRoutes } from '@slicesoft-features/home'

export const router = createBrowserRouter([...homeRoutes])

export { RouterProvider } from 'react-router-dom'
export type { RouteObject } from 'react-router-dom'
