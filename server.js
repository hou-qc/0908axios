const express = require('express');
const app = express();
app.get('/zhuye', (req, res) => {
    res.send({ name: 'xiaoming', age: 2 })
})
app.get('/zhuye2', (req, res) => {
    res.send({ name: 'laowang', age: 4 })
})
app.listen(3000, err => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
})