const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
       // required:true
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
}); 

mongoose.model('Employee',employeeSchema);  // (name of schema, schema Object)
// Employee -> should be in singular. In database it stores as 'employees' -> plural