import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './index.css'
import { ListRestaurants, LoaderList } from './routers/ListRestaurants.tsx'
import { RestaurantPage, RestaurantLoader } from './routers/Restaurant.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListRestaurants />,
        loader: LoaderList
    },
    {
        path: '/restaurant/:id',
        element: <RestaurantPage />,
        loader: RestaurantLoader
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
