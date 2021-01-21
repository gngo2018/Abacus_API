// using this tutorial: https://cloudnweb.dev/2019/08/building-rest-api-using-node-express-and-sequelize/

const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("../server/routes/index-routes")(app)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})