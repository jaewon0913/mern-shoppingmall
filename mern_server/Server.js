const express = require('express'); //  node.express 호출
const path = require('path');
const fs = require('fs'); // filesystem??
const app = express();  //  express를 app이란 변수로 사용
const bodyParser = require('body-parser');  //  body-parser 사용(node.js 본문 구문 분석 미들웨어)
const cors = require('cors');   //  cors 호출(express 미들웨어를 제공하기 위한 node.js 패키지)
const PORT = process.env.PORT || 4000;  //  포트 4000으로 사용

//  database 호출
const data = fs.readFileSync('./database.json');    //  database.json을 읽어온다.
const conf = JSON.parse(data);  //  data를 JSON 형식으로 파싱
const mysql = require('mysql'); //  mysql 호출

//  mysql 연결 정보 저장
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

//  mysql 연결하기
connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//  서버 엔드포인트 구현
//const mernRoutes = express.Router();

//  Build -> React Route
if (process.env.NODE_ENV = "production") {
    app.use(express.static(path.join(__dirname, "../mern_client/build")));
}

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../mern_client/build", "index.html"));
});

//  서버 접속 테스트 코드
app.get('/api/test', (req,res) =>{
    res.send({message: 'Hello Express!'});
});

app.get('/api/top', (req,res) =>{
    var sql = "SELECT * FROM mern_top_product";

    connection.query(
        sql,
        (err,rows,fields) => {
            res.send(rows);
    });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});