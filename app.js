const express = require('express')
// const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('config')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()

// app.use(cookieSession({
//     name: 'session',
//     keys: [/* secret keys */],
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')({
    origin: 'http://localhost:3000',
    credentials : true
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
});


app.use('/images',express.static('images'))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/shoes', require('./routes/shoes.routers'))
app.use('/api/collections', require('./routes/collections.routes'))
app.use('/api/orders', require('./routes/orders.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri') , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}
start()
