import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import MainReducer from './mainReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    main: MainReducer
})

export default rootReducer