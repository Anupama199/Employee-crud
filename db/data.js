

const mongoose=require('mongoose');
const url = 'mongodb+srv://AnupamaAravind:anupamaatlas@cluster0.6xocjsg.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to MongoDB Atlas');
})
.catch((error)=>{
    console.error('MongoDB Atlas connection error:',error);
});