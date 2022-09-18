require('dotenv').config()
let express = require('express')
let app = express()

// Declare routes that people can visit on the application.
app.get('/', (req, res) =>{
    res.send(` 
        <body style ="margin: 0;">
        <div style = "border: 1px solid black; height: 10vh; background-color: white;">
        <h2 style = "text-align: center;"> NAV BAR </h2>
        </div>
            <h1>White Page</h1>
        </body>
    `)
})

// teal page
app.get('/:color', (req, res) =>{
    let myColor = req.params.color
    res.send(` 
        <body style ="margin: 0;">
        <div style = "border: 1px solid black; height: 10vh; background-color: ${myColor};">
        <h2 style = "text-align: center;"> NAV BAR </h2>
        </div>
            <h1 style = "color: ${myColor}; text-transform: capitalize;">${myColor} Page</h1>
        </body>
    `)
})


app.listen(process.env.PORT)