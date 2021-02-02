import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
// import rootSaga from './sagas/sagas';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
const store = createStore(rootReducer);

export default store;
