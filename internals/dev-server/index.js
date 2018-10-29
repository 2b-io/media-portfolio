import express from 'express'

const app = express()

app.get('/alive', (req, res, next) => res.sendStatus(200))

app.listen(3008, () => console.log('Started at :3008'))
