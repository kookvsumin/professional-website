var express = require('express');
var router = express.Router();
var mysql = require('../Mysql/mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//登录
router.post('/login',function (req,res,next) {
    const {username,password}=req.body;
    console.log(req.body)
    if (username==='1'&&password==='admin')
    {
      res.send({code:1})
    }
    //res.send({code:1})
})
//获得公告
router.get('/getnotice',function (req,res,next) {
    mysql.query('SELECT * FROM zybnotice',function (err,result) {
        if(!err)
        {
            res.send(result);
        }
    })

})
//添加公告
router.post('/addnotice',function (req,res,next) {
    const {gonggao,neirong}=req.body;
    mysql.query(`INSERT INTO zybnotice (gonggao,neirong) VALUES (\'${gonggao}\',\'${neirong}\')`,function (err,result) {
        if(!err)
        {
            res.send({code:0})
        }
    })

})
//删除公告
router.post('/deletenotice',function (req,res,next) {
    const {gonggao} =req.body;
    mysql.query(`DELETE FROM zybnotice WHERE gonggao =\'${gonggao}\'`,function (err,result) {
        if(!err)
        {
            res.send({code:'success'})
        }
    })
})
//更新公告
router.post('/updatenotice',function (req,res,next) {
    const  {gonggao,neirong} =req.body;
    console.log(gonggao,req.body);
    mysql.query(`UPDATE zybnotice SET  neirong=\'${neirong}\' WHERE gonggao =\'${gonggao}\'`,function (err,result) {
        if(!err)
        {
            res.send({code:'success'})
        }
    })
})
//获得新闻
router.get('/getnews',function (req,res,next) {
    mysql.query('SELECT * FROM zybnews',function (err,result) {
        if(!err)
        {
            res.send(result);
        }
    })
})
//添加新闻
router.post('/addnews',function (req,res,next) {
    const {newsname,time,neirong}=req.body;
    mysql.query(`INSERT INTO zybnews (newsname,time,neirong) VALUES (\'${newsname}\',\'${time}\',\'${neirong}\')`,function (err,result) {
        if(!err)
        {
            res.send({code:0})
        }
    })

})
//删除新闻
router.post('/deletenews',function (req,res,next) {
    const {newsname} =req.body;
    mysql.query(`DELETE FROM zybnews WHERE newsname =\'${newsname}\'`,function (err,result) {
        if(!err)
        {
            res.send({code:'success'})
        }
    })
})
//更新新闻
router.post('/updatenews',function (req,res,next) {
    const  {newsname,time,neirong} =req.body;
    //console.log(gonggao,req.body);

    mysql.query(`UPDATE zybnews SET  neirong=\'${neirong}\' WHERE newsname =\'${newsname}\'`,function (err,result) {
        if(!err)
        {
       res.send({code:'success'})
        }
    })
})
module.exports = router;
