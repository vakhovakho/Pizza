import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { watchUserState } from './user/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

const watchTick = () => requestAnimationFrame(() => {
    store.dispatch(watchUserState());
    setTimeout(watchTick, 1500);
});

store.dispatch(watchUserState());
setTimeout(watchTick, 1500);

export default store;