// Import required modules
const express = require('express')
const cors = require('cors')

// Create an instance of Express app
const app = express()

app.use(cors())

const data = [{
  "id": 1,
  "first_name": "Amory",
  "last_name": "Dreinan",
  "email": "adreinan0@independent.co.uk",
  "gender": "Male"
}, {
  "id": 2,
  "first_name": "Carolus",
  "last_name": "Diss",
  "email": "cdiss1@bloglines.com",
  "gender": "Agender"
}, {
  "id": 3,
  "first_name": "Edee",
  "last_name": "Joye",
  "email": "ejoye2@angelfire.com",
  "gender": "Female"
}, {
  "id": 4,
  "first_name": "Robers",
  "last_name": "Mushet",
  "email": "rmushet3@shinystat.com",
  "gender": "Male"
}, {
  "id": 5,
  "first_name": "Carlos",
  "last_name": "Worthington",
  "email": "cworthington4@amazon.de",
  "gender": "Male"
}]


// Define a route
app.get('/', (req, res) => {
	res.send(data)
})

// Start the server
const port = 4000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
