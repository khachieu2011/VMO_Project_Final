import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const DetailPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/DetailPage'));
const CartPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Cart'));
const LoginPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));
const RegisterPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Register'));
const ProfilePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Profile'));
const ShippingPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/Screens/ShippingScreen.js'));
const BillPage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/Screens/BillScreen.js'));
const AdminProduct = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/admin/AdminProductScreen.js'));
const EditProduct = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/admin/ProductEditScreen.js'));
const OrderList = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/admin/AdminOrderScreen.js'));
const CategoryList = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/admin/AdminCategoryScreen.js'));
const EditCategory = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/admin/CategoryEditScreen.js'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/product/:id',
        component: DetailPage
    },
    {
        path: '/cart/:id?',
        component: CartPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/profile',
        component: ProfilePage
    },
    {
        path: '/shipping',
        component: ShippingPage
    },
    {
        path: '/bill',
        component: BillPage
    },
    {
        path: '/admin/productlist',
        component: AdminProduct
    },
    {
        path: '/admin/product/:id/edit',
        component: EditProduct
    },
    {
        path: '/admin/orderlist',
        component: OrderList
    },
    {
        path: '/search/:keyword',
        component: HomePage
    },
    {
        path: '/category/:keyword/:click',
        component: HomePage
    },
    {
        path: '/admin/categories',
        component: CategoryList
    },
    {
        path: '/admin/categories/:id/edit',
        component: EditCategory
    }
];

export default routers;
