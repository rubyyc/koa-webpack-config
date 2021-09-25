// const koa = require('koa')
// const path = require('path')
import koa from 'koa'
import path from 'path'

// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const router = require('./routes/routes')

import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
const app = new koa()
// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
// app.use(router())

const isDevMode = process.env.NODE_ENV === 'production'?  false: true

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, params: 'pretty'}),
  helmet()
])
if (!isDevMode) {
  app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000)