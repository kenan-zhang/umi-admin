export default [
    { path: '/', component: '@/layouts/blankLayout', routes: [
        { path: '/user', component: '@/layouts/userLayout', routes: [
            { exact: true, path: '/user', redirect: '/user/login' },
            { exact: true, path: '/user/login', name: 'login', component: '@/pages/user/login' },
            { exact: true, path: '/user/register', name: 'register', component: '@/pages/user/register' },
        ] },
        { path: '/home', component: '@/layouts/basicLayout', access: 'ADMIN', routes: [
            { exact: true, path: '/home', redirect: '/home/dashboard' },
            { exact: true, path: '/home/dashboard', component: '@/pages/home/dashboard/index' },
            { exact: true, path: '/home/account', component: '@/pages/home/account/index' },
            { component: '@/pages/404' },
        ] },
        { path: '/', redirect: '/home/dashboard' },
        { component: '@/pages/404' },
    ] },
];