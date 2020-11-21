const express = require('express')

const app = express()

const PORT = parseInt(process.env.PORT || "3000")

const APP_NAME = "Express Hello World"

app.get('/', (req, res) => {
	res.send(APP_NAME)
})

app.listen(PORT, _ => {
	console.log(`${APP_NAME} listening on port ${PORT}`)
})
