require('dotenv').config();
const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs'); // npm install --save ejs
app.use(express.static(__dirname + '/public'));


app.get('/test', (req, res) => {
    res.render('test', {
    });
});    

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.get('/download/:file_name', async (req, res) => {
    let filePath = __dirname+'/file/'+req.params.file_name

    try {
        fs.statSync(filePath);
        res.download(filePath)
    } catch (error) {
        //파일이 없다면 에러 발생
        if (error.code === "ENOENT") {
            console.log("파일이 존재하지 않습니다.");
        }
        res.send('파일이 존재하지 않습니다.')
    }
    
});

// 페이지를 찾을 수 없음 오류 처리
app.use(function(req, res, next) {
    res.status(404);
    res.send(`
                <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
                <html>
                    <head>
                        <title>404 페이지 오류</title>
                    </head>
                    <body>
                        <h1>찾을 수 없습니다</h1>
                        <p>요청하신 URL ' + req.url + ' 을 이 서버에서 찾을 수 없습니다.</p><hr>
                    </body>
                </html>`);
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});
