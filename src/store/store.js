import insectReducer from './reducers.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: insectReducer
  })

export default store;