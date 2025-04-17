import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST, PURGE,REGISTER } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from 'redux-persist/lib/storage'
import cart from "./Cart"
import product from "./Product"
import user from "./User"
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    cart : cart,
    product : product,
    user : user
  })

  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store