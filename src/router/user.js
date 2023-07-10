const express = require('express') // 1.导入 express 模块
const router = express.Router() // 2.创建路由对象

// 3.导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')
 // 4.挂载路由
router.post('/getUser', user_handler.getUser)
router.post('/getRouters', user_handler.getRouters)



module.exports = router // 5.暴露router模块
