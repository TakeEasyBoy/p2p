/**
 * Created by Administrator on 2017/9/21.
 */
/*
* @作为公共服务器,前后端都可以访问
*
* */

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/p2p',function(err){
    if(err){
        throw err;
    }else{
        console.log("connected to p2p server ^@^");
    }
});

//定义用户名的数据库骨架
var p2pSchema = new mongoose.Schema({
    username            :String,        //登陆名
    password            :String,        //密码
	nickname            :String,        //昵称
	truename            :String,        //真实姓名
	idNum               :String,        //证件号码
	idType              :String,        //证件类型
	gender              :String,        //性别
	addr                :String,        //住址
	photo               :String         //证件照
});

var p2pQueryModel = mongoose.model("username",p2pSchema,"username");

//定义新闻列表的数据库骨架
var p2pArticleSchema = new mongoose.Schema({
    title               :String,        //
    content             :String,
    ctime               :String,
    category            :String,
    author              :String,
    abstract            :String,
    source				:String
});

var p2pArticleQueryModel = mongoose.model("p2pArticleContents",p2pArticleSchema,"p2pArticleContents");

//暴露p2pQueryModel,blogArticleQueryModel给全局
global.p2pQueryModel = p2pQueryModel;
global.p2pArticleQueryModel = p2pArticleQueryModel;
//将mongoose暴露出去
module.exports = mongoose;