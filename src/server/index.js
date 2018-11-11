import express from 'express'
import slash from 'express-slash'
import morgan from 'morgan'

import bootstrap from './bootstrap'

const app = express()

app.enable('strict routing')
app.enable('trust proxy')
app.disable('x-powered-by')

app.use(morgan('dev'))
app.use(slash())

bootstrap(app)

export default app
