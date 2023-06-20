/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayoutErrorPage from 'pages/DefaultLayoutPages/Error';
import { routesConfig } from 'config';

let routes = [];

routesConfig.forEach((layout) => {
  routes.push({
    path: layout.path,
    element: <layout.component />,
    errorElement: <DefaultLayoutErrorPage />,
    children: (function () {
      const children = [];
      layout.pages.forEach((page) => {
        children.push({
          path: page.path,
          element: <page.component />,
        });
      });
      return children;
    })(),
  });
});

const router = createBrowserRouter(routes);

export default router;
