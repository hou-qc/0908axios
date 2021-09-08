const express = require('express');
const app = express();
app.get('/zhuye', (req, res) => {
    res.send({ name: 'xiaoming', age: 2 })
})
app.get('/zhuye2', (req, res) => {
    res.send({ name: 'laowang', age: 4 })
})
app.get('/zhuye3', (req, res) => {
    res.send({ name: 'laowg', age: 88 })
})
app.get('/zhuye4', (req, res) => {
    res.send({ name: 'lowg', age: 28 })
})
app.listen(3000, err => {
    if (!err) console.log('服务器启动成功');
    else console.log(err);
})
