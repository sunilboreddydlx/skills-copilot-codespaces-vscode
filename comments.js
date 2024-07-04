//Create web server with express
const express = require('express')
const app = express()

//Create a route to get comments
app.get('/comments', (req, res) => {
    res.json({
        comments: [
            {
                id: 1,
                body: "Hello world"
            },
            {
                id: 2,
                body: "Hi, how are you?"
            }
        ]
    })
})

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001')
})