const express = require('express')
const PORT = 8080

// App
const app = express()
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(PORT, () => {
	console.log(`Example app listening on port: ${PORT}`)
})