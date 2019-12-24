import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger'

//The order of the middleware is critical
export default applyMiddleware (
    thunk,
    logger
)
