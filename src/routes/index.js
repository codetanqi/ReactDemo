import List from '../pages/admin/products/List';
import Index from "../pages/admin/dashboard/Index";
import Login from "../pages/Login";
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/admin/PageNotFound';
import 'antd/dist/antd.css'

export const mainRoutes = [
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [{
    path: '/admin/dashboard',
    component: Index
},
{
    path: '/admin/products/edit/:id',
    component: Edit
}, {
    path: '/admin/products',
    component: List,
    exact: true
}
]
