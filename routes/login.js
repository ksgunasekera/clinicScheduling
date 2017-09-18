const express=require('express');
const router=express.Router();

router.get('/',(request,respond)=>{
	respond.render('login');
});
router.post('/login',(request,respond)=>{
	const data=request.body;
	console.log(data.username);
	console.log(data.password);
});

module.exports =router;