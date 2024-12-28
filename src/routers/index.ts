import { useRoutes } from 'react-router-dom'
import routers from './routers'
function Router() {
  const routerTab = useRoutes(routers)
  return routerTab
}
export default Router
