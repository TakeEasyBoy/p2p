var express = require('express');
var router = express.Router();
var mongoose = require('./common.js');

//用户注册请求
router.post('/reguser.html',function(req,res){
	console.log('reguser router test passed');
	var username = req.body.username;
	var password = req.body.password;
	//实例化用户名
	var p2puser = new p2pQueryModel();
	p2puser.username = username;
	p2puser.password = password;
	p2puser.save(function(err,data){
		if(err){
			var result = 'false';
			throw err;
		}else{
			result = "true";
			res.send(result);
		}
	})
});

//用户登陆验证
router.post('/checkuser.html',function(req,res){
	console.log("checkuser.html test passed");
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	p2pQueryModel.find({"username":username,"password":password}).exec(function(err,data){
		if(err){
			throw err;
		}else{
			if(data.length > 0){
				res.cookie("user",username);
				res.send(username);
			}else{
				res.send("0");
			}
		}
	})
});

//用户实名与认证
router.post('/auth.html',function(req,res){
	console.log('auth.html test passed');
	console.log(req.body);
	res.send(req.body);
});


module.exports = router;
