const express = require('express')
const app = express()
const bodyParser = require('body-parser');


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const x = [
    {
        "name":"mayank bankoti",
        "email":"mayankbankoti28@gmail.com",
        "password":"Test@123"
    },
    {
        "name":"guest",
        "email":"guest@yopmail.com",
        "password":"Test@123"
    }
]


app.get('/', (req, res) => {
    
    res.send(x)
})

app.post('/login',(req, res) =>{
    const postData = req.body.body;
    y = response = x.filter((curr)=>curr.email===postData.email && curr.password===postData.password)
    res.send(y);
})

app.listen(3000, () => {
    console.log('Server is running')
})