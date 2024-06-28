const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/libreria';
mongoose.connect(url_db)

.then(() =>{
    console.log("furula")
})
.catch((err)=>{
    console.log("no jala")
})
const schema_book =new mongoose.Schema({
    name:{
        type:String
    },
    release_date:{
        type:Date
    },
    author:{
        type:String
    },
    price:{
        type:Number
    },
    editorial:{
        type:String
    },
    genre:{
        type:String
    },
    page_num:{
        type:Number
    }
})
const model_book =new mongoose.model('general_data', schema_book)
model_book.create({
    name:"Hora de los juegos",
    release_date: new Date ("6/12/2020"),
    author:"Carlos Albert Tejeda Esparza",
    price: 160,
    editorial:"Taqueriat",
    genre:"Fantasia",
    page_num:235

})


