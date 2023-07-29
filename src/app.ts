import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import  paysRoute  from "./route/paysRoute"
import  userRoute  from "./route/userRoute"
const path = require('path')


// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app = express()
app.use(express.json())

// register routes

app.use('/pays', paysRoute)
app.use('/auth', userRoute)
app.use('/images', express.static(path.join(__dirname, 'images')));

// start express server
app.listen(3000)