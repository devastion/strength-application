import formulaSlice from "@lib/redux/slices/formulaSlice";
import genderSlice from "@lib/redux/slices/genderSlice";
import historySlice from "@lib/redux/slices/historySlice";
import unitsSlice from "@lib/redux/slices/unitsSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";

import storage from "./syncStorage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  units: unitsSlice,
  formulas: formulaSlice,
  gender: genderSlice,
  history: historySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  // ? No types
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const logger = createLogger({
    level: "info",
  });
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
