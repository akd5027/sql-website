const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<html><h1>This is an H1</h1><p>Hello Julian</p></html>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
