import { combineReducers } from 'redux'

import itemsReducer from './itemsReducer'
import feedbackReducer from './feedbackReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    items: itemsReducer,
    feedback: feedbackReducer,
    user: userReducer
})

// STORE = {
//     items: {
//         all: [],
//         selected: null
//     },
//     feedback: {
//       loading: false,
//       error: ""
//     },
//     user:  {
//       isAuth: false,
//       info: null,
//       token: null
//      }
// }

export default rootReducer