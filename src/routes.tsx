import { lazy,type ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactNode;
}

const Home = lazy(() => import('./pages/index'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
