// Import required modules
const express = require('express')

// Create an instance of Express app
const app = express()

// Define a route
app.get('/', (req, res) => {
	res.send('Hello, Asmaa I don')
})

// Start the server
const port = 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
