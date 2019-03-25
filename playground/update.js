const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB servers');
    }
    console.log('Connected to MongoDB Servers');

    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5c988c3e32a5b313589a52fd')
    },{
        $set : {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });

    client.close()
})