import { ComponentType, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { LoginAction, LoginLoader, LogoutAction, RootLoader } from '@/permission';
// eslint-disable-next-line react-refresh/only-export-components
const BasicsLayout = lazy(() => import('@/layouts/basics'));
type Module = {
  [keys in string]: () => Promise<{ default: ComponentType<any>; }>
}
const pagesModules = import.meta.glob('@/pages/*/index.tsx') as unknown as Module;
const nestModules = import.meta.glob('@/pages/*/router/*/index.tsx') as unknown as Module;
export const modules: Module = {
  ...pagesModules,
  ...nestModules
};

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    loader: RootLoader,
    Component: BasicsLayout,
    children: []
  },
  {
    path: '/turntable',
    // loader: LoginLoader,
    // action: LoginAction,
    Component: lazy(modules[getPath('turntable')])
  },
  {
    path: '/dice',
    // loader: LoginLoader,
    // action: LoginAction,
    Component: lazy(modules[getPath('dice')])
  },
  {
    path: '/wifipassword',
    // loader: LoginLoader,
    // action: LoginAction,
    Component: lazy(modules[getPath('wifipassword')])
  },
  {
    path: '/logout',
    action: LogoutAction,
    Component: lazy(modules[getPath('error')])
  },
  {
    path: '*',
    Component: lazy(modules[getPath('error')])
  }
];

export default routes;

/**
 * 获取页面路径
 * @param name
 * @returns
 */
export function getPath(name: string) {
  return `/src/pages/${name}/index.tsx`;
}
