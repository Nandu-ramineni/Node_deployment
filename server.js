import express from 'express'

const app = express()


const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is some data from the server',
        timestamp: new Date()
    }
    res.json(data)
})

app.get('/health', (req, res) => {
    res.status(200).send('OK')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})