const mongoose = require('mongoose');
const Schema = mongoose.Schema({                                              
    name: String,
    location: String,
    position: String,
    salary: Number  

});

const employeeData = mongoose.model('Employeedata',Schema);
module.exports = employeeData;