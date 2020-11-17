const express = require('express')
const session = require('cookie-session')
const helmet = require('helmet')
const hpp = require('hpp')
const csurf = require('csurf')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const config = require('config')
const mongoose = require('mongoose')
const passport = require('passport')

/* Create Express App */
const app = express()

/* Set Security Configs */
app.use(helmet())
app.use(hpp())

/* Set Cookie Settings */
app.use(
    session({
        name: 'session',
        secret: config.get('cookieSecret'),
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    })
);
app.use(csurf())


app.use(passport.initialize())
// require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(cookieParser(config.get('cookieSecret')))

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
