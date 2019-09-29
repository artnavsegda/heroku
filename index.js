const express = require('express')
const port = process.env.PORT || 5000;
const puppeteer = require('puppeteer');

express()
  .use(express.static('public'))
  .get('/', (req, res) => res.send('Hello World!'))
  .get('/genpdf', (req, res) => {
    (async() => {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.goto('https://irz-puptest.herokuapp.com/printer.html');
        await page.screenshot().then(function(buffer) {
            res.setHeader('Content-Disposition', 'attachment;filename="' + 'jeeson' + '.png"');
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer)
        });

        await browser.close();
    })();
  })
  .listen(port, () => console.log(`Example app listening on port ${port}!`))
