import 'dotenv/config'
import express from 'express'
import middleware from './middleware'
import routes from './routes'
import { errorHandler, notFoundHandler } from './error'
const app = express()
app.use(middleware)
app.use(routes)
app.use(notFoundHandler)
app.use(errorHandler)


export default app