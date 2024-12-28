import React from 'react'
// 组件
const Turntable = React.lazy(() => import('@/pages/turntable/turntable'))
const Home = React.lazy(() => import("@/pages/home/home"))
const routers: any[] = [
  {
    path: '/',
    redirect: '/home',
    auth: true
  },
  {
    path: '/home',
    component: Home,
    auth: true,
    title: '首页',
    footerShow: true,
    meta: {
      icon: 'home'
    }
  },
  {
    path: '/turntable',
    component: Turntable,
    auth: true,
    title: '首页',
    footerShow: true,
    meta: {
      icon: 'home'
    }
  }
]

export default routers
