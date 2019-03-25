const express = require('express')
const bodyParser = require('body-parser')

let {mongoose} = require('./db/mongoose')
let {Todo} = require('./models/Todos')
let {Users} = require('./models/Users')

let app = express()

app.use(bodyParser.json())

app.post('/todos', (req,res)=>{
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(result=>{
        res.send(result);
    },(err)=>{
        res.status(400).send(err)
    })
});



app.listen('3000',()=>{
    console.log('Server is up on port 3000');
})