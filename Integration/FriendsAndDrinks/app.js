const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
app.use(bodyParser.json())
app.use(express.static(__dirname + '/frontend/dist'))
app.use(session({ secret: 'IamSuperCerealYouGuys' }))

require('./server/config/mongoose')

const routes = require('./server/config/routes')
routes(app);

app.listen(8000, function () {
    console.log('===LISTENING ON PORT 8000====')
});