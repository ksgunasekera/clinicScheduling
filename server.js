const express =require('express');
const app=express();
const path=require('path');
const login=require('./routes/login');
const registration=require('./routes/registration');

const port =8000;

app.use('/js',express.static(__dirname+'/asset/js'));
app.use('/css',express.static(__dirname+'/asset/css'));
app.use('/images',express.static(__dirname+'/asset/images'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',login);
app.use('/registration',registration);


app.listen(port,()=>{
	console.log('Server running at port :'+port);
});