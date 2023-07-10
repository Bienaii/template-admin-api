const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRouter = require('./router/user'); // 导入并使用用户router模块
const app = express()

app.use(bodyParser.json()) // 解析json编码数据
app.use(bodyParser.urlencoded({ extended: false })) // 解析url编码的数据
app.use(cors()) // 不加上这句代码跨域访问时会出现错误，加上就不会出现跨域错误情况
app.use('/user', userRouter)


app.listen(3001, () => {
  console.log('Server started on port 3001')
})