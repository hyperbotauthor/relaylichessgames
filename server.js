const fetch = require('node-fetch')
const express = require('express')
const path = require('path')

const app = express()

const PORT = parseInt(process.env.PORT || "3000")

const APP_NAME = "Express Hello World"

const relayUrl = process.env.RELAY_URL || "https://lichess.org/api/games/user/YoBot_v2?max=10"

app.get('/', (req, res) => {
	fetch(relayUrl).then(response => response.text().then(content => {
		res.send(content)
	}))	
})

app.use('/', express.static(path.join(__dirname, '/')))

app.listen(PORT, _ => {
	console.log(`${APP_NAME} listening on port ${PORT}`)
})
