import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'users',
  storage,
  // whitelist: ['email', 'password'] // Only persist this whitelist items
  // blacklist: ['allUsers']          // Not persist this blacklist items
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    // register: userReducer,
    register: persistedReducer,
  },
})

export const persistor = persistStore(store);