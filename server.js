const express = require('express')
const path = require('path')


/* Static configs */
const port = 3000
const host = "0.0.0.0"

const serverOptions={
    port,
    host
}


const app = express()

app.use(express.static('dist'))


app.get('/', (req,res)=>{
    res.sendFile(path.resolve('index.html'))    
})

app.listen(serverOptions, e=>{
    console.log(`> Server ready on http://localhost:3000`)
    if (e) throw e
})