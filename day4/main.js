// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();
// 处理静态资源
app.use(express.static('public'))
    // 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
app.get('/data1', (req, res) => {
    res.send('返回给客户端的data1')
})
app.get('/data2', (req, res) => {
    res.send('返回给客户端的data2')
})
app.get('/data3', (req, res) => {
        res.send('返回给客户端的data3')
    })
    // 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));