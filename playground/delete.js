const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB servers');
    }
    console.log('Connected to MongoDB Servers');

    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndDelete({text : "hello "}).then((result)=>{
        console.log(result);
    });

    //client.close()
})