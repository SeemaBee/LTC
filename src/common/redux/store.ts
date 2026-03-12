import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/common/authSlice";
import providerHomeReducer from "./features/provider/providerHomeSlice";
import providerNewRequests from "./features/provider/providerNewRequestsSlice"
import providerAcceptedRequests from "./features/provider/providerAcceptedRequests.slice"
import providerUpcomingJobs from "./features/provider/upcomingJobsSlice"
import providerOngoingJobs from "./features/provider/completedJobsSlice"
import providerCompletedJobs from "./features/provider/inProgessJobsSlice"
import providerAvailability from "./features/provider/providerAvailabilitySlice"
import servicesList from "./features/provider/servicesListSlice"
import idProofList from "./features/provider/idProofLSlice"

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer = combineReducers({
  auth: authReducer,
  providerHome: providerHomeReducer,
  providerRequests: providerNewRequests,
  providerAcceptedRequests: providerAcceptedRequests,
  providerUpcomingJobs,
  providerOngoingJobs,
  providerCompletedJobs,
  providerAvailability,
  servicesList,
  idProofList
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],  
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;
