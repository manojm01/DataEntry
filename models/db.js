const mongoose = require('mongoose')


// console.log(process.env.USER_NAME);
// console.log(process.env.PASS_WORD);

mongoose.connect('mongodb+srv://manoj:manoj@cluster0.eku64.mongodb.net/EmployeeDB', {useNewUrlParser:true} , (err)=>{

    if(!err){console.log('MongoDB Connection Succeeded');}
    else {console.log('Error in DB Connection: '+ err);}

});
// mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser:true} , (err)=>{

//     if(!err){console.log('MongoDB Connection Succeeded');}
//     else {console.log('Error in DB Connection: '+ err);}

// });

require('./employee.models');