const express = require('express')
const port = process.env.PORT || 5000;
const puppeteer = require('puppeteer');

var one;
var two;

var label = {
  title: "S04-F4",
  IMEI: "5456457878645647",
  code: "SAAH10000009",
  user: "admin",
  pass: "admin",
  copyright: "Сделано в России"
};

express()
  .use(express.static('public'))
  .get('/', (req, res) => res.send('Hello World!'))
  .get('/router_object.json', (req,res) => res.json(label))
  .get('/genpdf', (req, res) => {
    label = req.query;
    (async() => {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.goto('https://irz-puptest.herokuapp.com/printer.html');
        // await page.goto('http://localhost:5000/printer.html');
        await page.pdf({width: '11cm', height : '7cm'}).then(function(buffer) {
            res.setHeader('Content-Disposition', 'attachment;filename="' + 'jeeson' + '.pdf"');
            res.setHeader('Content-Type', 'application/pdf');
            res.send(buffer)
        });

        await browser.close();
    })();
  })
  .listen(port, () => console.log(`Example app listening on port ${port}!`))
