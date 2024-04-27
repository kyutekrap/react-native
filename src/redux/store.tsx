import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, dev tools configuration, etc., if needed
})

export default store
