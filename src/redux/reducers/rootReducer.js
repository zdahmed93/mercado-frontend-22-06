import { combineReducers } from 'redux'

import itemsReducer from './itemsReducer'
import feedbackReducer from './feedbackReducer'

const rootReducer = combineReducers({
    items: itemsReducer,
    feedback: feedbackReducer
})

export default rootReducer