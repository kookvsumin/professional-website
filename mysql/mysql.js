//数据库定义
const mysql=require("mysql");
//配置
var mysqlcreate={
    host:'127.0.0.1',
    user:"root",
    password:"",
    database:'test1',
    port:"3306"
}
const connection=mysql.createConnection(mysqlcreate);
connection.connect(function (err) {
    if(err)
    {
        console.log('数据库连接失败');
    }
    else {
        console.log('数据库连接成功');
    }
})
module.exports=connection;