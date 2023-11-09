import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './index.css'
import { ListRestaurants } from './routers/ListRestaurants.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListRestaurants />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
