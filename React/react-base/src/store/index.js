import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistedReducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistedReducers(rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
