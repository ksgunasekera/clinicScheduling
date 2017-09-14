const express =require('express');
const app=express();
const path=require('path');
const login=require('./routes/login');
const registration=require('./routes/registration');
const forgetPassword=require('./routes/forgetPassword');
const bodyParser=require('body-parser');


const port =8000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/js',express.static(__dirname+'/asset/js'));
app.use('/css',express.static(__dirname+'/asset/css'));
app.use('/images',express.static(__dirname+'/asset/images'));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',login);
app.use('/registration',registration);
app.use('/forgetPassword',forgetPassword);

app.listen(port,()=>{
	console.log('Server running at port :'+port);
});