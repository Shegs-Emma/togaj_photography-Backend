const   express     = require('express'),
        app         = express(),
        bodyParser  = require('body-parser'),
        mongoose    = require('mongoose');

const userName  = 'togaj_\photography';
const photoRoutes = require('./routes/photo');
const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

mongoose.connect(`mongodb+srv://${userName}:M%40rch041992M@cluster0-tbg4m.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.log('Something went wrong');
        console.error(error);
    });

app.use(bodyParser.json());

app.use('/api/photos', photoRoutes);

app.use('/api/auth', userRoutes);
//========================================MY ROUTES==========================================

//===========================AUth===================================================
app.get('/api/login', (req, res, next) => {
    console.log(req.body);
})


//================================LISTENER===========================================================

module.exports = app;