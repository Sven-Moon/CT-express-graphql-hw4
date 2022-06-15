const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')

dotenv.config()

const app = express()
app.listen(process.env.PORT, () => {
  console.log(`Server running. Listening on port ${process.env.PORT}`)
})
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/profile', (req, res) => {
  res.render('pages/profile')
})

app.get('/login', (req, res) => {
  res.render('pages/login')
})

app.get('/register', (req, res) => {
  res.render('pages/register')
})

app.get('/user', (req, res) => {
  res.render('pages/user')
})