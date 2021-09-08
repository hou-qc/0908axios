import axios from "axios";
// const axios = require('axios').default;
axios({
    mehtod: 'get',
    url: 'http://localhost:3000/posts',
}).then(function (response) {
    console.log(response);
})