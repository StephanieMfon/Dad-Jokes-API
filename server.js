const dotenv =require('dotenv')
dotenv.config()
const app = require('./app')
const PORT = process.env.PORT || 6000
// start the server
app.listen(PORT, ()=>{
    console.log(`Application currently running on port ${PORT}`)
  })