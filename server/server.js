const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')

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

app.get('/todos', (req,res)=>{
    Todo.find().then((result)=>{
        res.send({result})
    },(err)=>{
        res.status(400).send(err)
    })
})

app.get('/todos/:id',(req,res)=>{

    id = req.params.id

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findById(id).then((result)=>{
        if(!result){
            return res.status(404).send()
        }
        else{

            res.send({result})
        }
        
    }).catch((err)=>{
        res.status(400).send()
    })
})

app.listen('3000',()=>{
    console.log('Server is up on port 3000');
})