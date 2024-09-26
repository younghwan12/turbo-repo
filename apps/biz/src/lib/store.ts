import appApi from '@pims-frontend/apis/lib/appApi'
import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit'

import layoutReducer from './features/layout/layoutSlice'
import basicInfoReducer from './features/project/basicInfoSlice'
import projectReducer from './features/project/projectSlice'
import rowSelectionReducer from './features/project/rowSelectionSlice'
import scheduleReducer from './features/schedule/scheduleSlice'
import addUserModalReducer from './features/user-management/addUserSlice'
import assignDialogReducer from './features/user-management/assignSubpjtSlice'
import userModalReducer from './features/user-management/deleteUserSlice'
import userMgtReducer from './features/user-management/userMgtSlice'
import testReducer from './features/test/testSlice'
// import { rtkErrorLogger } from './middlewares/rtkErrorLogger';
// import errorReducer from './errorSlice';

export const makeStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) => {
  return configureStore({
    reducer: {
      [appApi.reducerPath]: appApi.reducer,
      layout: layoutReducer,
      project: projectReducer,
      rowSelection: rowSelectionReducer,
      deleteModal: userModalReducer,
      addModal: addUserModalReducer,
      userMgt: userMgtReducer,
      assignSubpjtModal: assignDialogReducer,
      basicInfo: basicInfoReducer,
      schedule: scheduleReducer,
      test: testReducer,
      // error: errorReducer,
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware().concat(appApi.middleware),
      //appApi.middleware,
    ],
    ...options,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
