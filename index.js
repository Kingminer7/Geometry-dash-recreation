const express = require("express")
const path = require("path")

const app = express()
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/assets/logo.png', (req, res) => {
  res.sendFile(path.join(__dirname,path.join("assets","logo.png")))
})

app.listen(1000, () => {
  
})