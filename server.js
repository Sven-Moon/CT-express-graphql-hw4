const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const schema = require('./src/graphql/schema')
const { graphqlHTTP } = require('express-graphql')
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')

dotenv.config()
const app = express()
connectDB()

app.use(cookieParser()) // !before graphql!

app.use("/graphql", graphqlHTTP({
  schema,
  qraphiql: true
}))

app.use(express.urlencoded({ extended: true }))// !After GraphQL & before the other routes



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/templates/views'))
app.use(authenticate)

require("./src/routes")(app)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT, () => {
  console.log(`Server running. Listening on port ${process.env.PORT}`)
})


