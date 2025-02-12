import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {companyReducer} from "./company/companySlice";

const rootReducer = combineReducers({
     companyReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
