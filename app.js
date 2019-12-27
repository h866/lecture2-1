var express = require('express')
var app = express()
var path =require('path')
require('dotenv').config()

var indexRouter = require('./router/index')
var userRouter = require('./router/user')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.set('html',require('ejs').renderFile)

//json형식 입력오면 express에서 json처리해줌.
app.use(express.json())
//정적 디렉토리 등록.
app.use(express.static(path.join(__dirname,'public')))

app.use('/',indexRouter)
app.use('/people',userRouter)

var port =process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server is Starting at http://localhost:${port}`)
})




