const express = require('express')
const app = express()
const port = process.env.PORT || 41321
const newsAPIroute = require('./routes/index')
// Using Routes
app.use(newsAPIroute)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
