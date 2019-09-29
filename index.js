const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

express()
  .use(express.static('public'))
  .get('/', (req, res) => res.send('Hello World!'))
  .listen(port, () => console.log(`Example app listening on port ${port}!`))
