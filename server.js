const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const users = require('./routes/users');
const lists = require('./routes/lists');
const dashboard = require('./routes/dashboard');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


const db = require('./config/keys').mongoURI

mongoose
  .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB is Connected'))
      .catch(err => console.log(err))

app.use(passport.initialize())
require('./config/passport')(passport)


app.use('/api/users', users);
app.use('/api/lists', lists);
app.use('/api/dashboard', dashboard);
//This if is used only for deployment purposes in heroku
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
})