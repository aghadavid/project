const express = require('express')
const Controller = require('./controller')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',Controller.getEmployee )
app.get('/total',Controller.getTotal )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})