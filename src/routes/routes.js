import combineRoutes from 'koa-combine-routers'
import routes from './demoRouter'

export default combineRoutes(
 routes
)