// 用户信息
exports.getUser = (req, res) => {
  res.json({
    data: {
      status: 'success',
      name: 'zhangsan',
      id: 123456,
      age: 18,
      sex: '1'
    },
    code: 200,
    msg: 'operation secceed'
  })
}

// 获取路由
exports.getRouters = (req, res) => {
  res.json({
    data: [
      {
        alwaysShow: true,
        hidden: false,
        path: '/monitor',
        name: 'Monitor',
        redirect: 'noRedirect',
        component: 'Layout',
        meta: { title: '日志管理', icon: 'monitor' },
        children: [
          {
            path: 'operateLog',
            name: 'OperateLog',
            hidden: false,
            component: 'monitor/operateLog/index',
            meta: { title: '操作日志', icon: 'log' }
          },
          {
            path: 'loginLog',
            name: 'LoginLog',
            hidden: false,
            component: 'monitor/loginLog/index',
            meta: { title: '登录日志', icon: 'log' }
          }
        ]
      },
      {
        alwaysShow: true,
        hidden: false,
        path: '/setting',
        name: 'Setting',
        component: 'Layout',
        redirect: 'noRedirect',
        meta: { title: '系统设置', icon: 'setting' },
        children: [
          {
            path: 'user',
            name: 'User',
            hidden: false,
            component: 'setting/user/index',
            meta: { title: '用户管理', icon: 'user' }
          },
          {
            path: 'role',
            name: 'Role',
            hidden: false,
            component: 'setting/role/index',
            meta: { title: '角色管理', icon: 'user' }
          }
        ]
      }
    ],
    code: 200,
    msg: 'operation secceed'
  })
}