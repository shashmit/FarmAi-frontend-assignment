import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dynamicDropReducer from "../features/dynamicDropSlice";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, dynamicDropReducer);

// Configure and create the store
export const store = configureStore({
  reducer: {
    fields: persistedReducer,
  },
});

// Create the persistor for persisting state
export const persistor = persistStore(store);
