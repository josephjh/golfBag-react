const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const ctrl = require('./controllers/controller')



const app = express()

app.use(bodyParser.json())

app.use(cors())

app.get("/api/clubs", ctrl.read )

app.post("/api/clubs", ctrl.create)

app.delete("/api/clubs/:id", ctrl.delete)

app.put("/api/clubs/:id", ctrl.update)

app.listen(4000, () => console.log('Ahoy Mates, Port 4000 Here'))