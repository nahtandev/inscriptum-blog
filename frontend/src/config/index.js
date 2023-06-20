import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

import { Home, Tags, About } from 'pages/DefaultLayoutPages';
import { Dashboard } from 'pages/AdminLayoutPage';

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

const menuConfig = {
  navLinks: [
    {
      id: 1,
      name: 'Home',
      icon: '',
      path: '/',
    },
    {
      id: 2,
      name: 'Tags',
      icon: '',
      path: '/tags',
    },
    {
      id: 3,
      name: 'About',
      icon: '',
      path: '/about',
    },
  ],
};

export { siteConfig, menuConfig, routesConfig };
