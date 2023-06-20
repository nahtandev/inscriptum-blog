import DefaultLayout from 'layouts/DefaultLayout';
import AdminLayout from 'layouts/AdminLayout';

import Home from 'pages/DefaultLayoutPages/Home';
import Tags from 'pages/DefaultLayoutPages/Tags';
import About from 'pages/DefaultLayoutPages/About';

// console.log(Tags);
import Dashboard from 'pages/AdminLayoutPage/Dashboard';

const siteConfig = {
  name: 'Inscriptum',
  description: ' Write, Publish, Connect',
};

const routesConfig = [
  {
    id: 'ly-1',
    path: '/',
    name: 'Default Layout',
    component: DefaultLayout,
    pages: [
      {
        id: 1,
        name: 'Home',
        component: Home,
        icon: '',
        path: '/',
      },
      {
        id: 2,
        name: 'Tags',
        component: Tags,
        icon: '',
        path: 'tags',
      },
      {
        id: 3,
        name: 'About',
        component: About,
        icon: '',
        path: 'about',
      },
    ],
  },
  {
    id: 'ly-2',
    path: '/me',
    name: 'Admin Layout',
    component: AdminLayout,
    pages: [
      {
        id: 'd1',
        name: 'Dashboard',
        component: Dashboard,
        icon: '',
        path: 'dashboard',
      },
    ],
  },
];

export { siteConfig, routesConfig };
