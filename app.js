const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const mongoose = require('mongoose')
const passport = require('passport')

const upload = require('./middleware/upload')

const app = express()

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/app/shoes', require('./routes/shoes.routers'))
app.use('/api/collections', require('./routes/collections.routes'))
app.use('/api/uploadfile', passport.authenticate('jwt', {session: false}), upload.array('image'), async (req, res) => {
    console.log(req.files)
    res.json('ok')
})

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
