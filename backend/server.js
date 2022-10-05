const express = require ('express')
const connectDB = require('./config/connectDB')
const articleRoute = require('./routes/article')
const userRoutes = require('./routes/user')
const app = express()
app.use(express.json())
require("dotenv").config();

connectDB()
const port = 7000
app.use("/api/users", userRoutes);
app.use("/api/articles",articleRoute);
app.listen( port , ()=> console.log(`app is runnig on port ${port}`))