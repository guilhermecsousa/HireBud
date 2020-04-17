const express = require('express');
const mysql = require('mysql');
const port = 3001;
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "hirebud",
    });

con.connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/cities', function(req, res){
    var sql = 'SELECT DISTINCT area FROM providers ;';
    con.query(sql, function (err, result){
        if (err) throw err;
        res.json({providers:result});
    });
});

app.get('/services', function(req, res){
    var sql = 'SELECT DISTINCT service FROM providers ;';
    con.query(sql, function (err, result){
        if (err) throw err;
        res.json({providers:result});
    });
});

app.get('/providers', function(req, res){
    var sql = "SELECT * FROM providers;";
    con.query(sql, function (err, result){
        if (err) throw err;
        var p1 = Math.floor(Math.random()*result.length+1);
        var p2 = Math.floor(Math.random()*result.length+1); 
        var p3 = Math.floor(Math.random()*result.length+1);
        var sol = [result[p1],result[p2],result[p3]];
        res.json({providers:sol});
    });
});

app.get('/provider', function(req, res){ 
    var sql;
    if(req.query.id==null || req.query.id==''){
        sql = "SELECT * FROM providers WHERE id=1;";
    }else{
        sql = "SELECT * FROM providers WHERE id="+req.query.id+";";
    }
    con.query(sql, function (err, result){
        if (err) throw err;
        res.json({providers:result[0]});
    });
});

app.get('/servlist', function(req, res){
    var sql = 'SELECT * FROM providers WHERE service="'+req.query.service+'" AND area="'+req.query.area+'";';
    con.query(sql, function (err, result){
        if (err) throw err;
        res.json({providers:result});
    });
})

app.listen(port,()=>{console.log('server start')});