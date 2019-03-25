const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB servers');
    }
    console.log('Connected to MongoDB Servers');

    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //9 })

    db.collection('Users').insertOne({
        name: 'Harshit',
        age : 19,
        location : 'Jamsedpur'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert data');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close()
})