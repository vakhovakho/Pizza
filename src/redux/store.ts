import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { watchUserState } from './user/actions';
import { watchCartState } from './cart/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

const watchTickAction = async () => {
    store.dispatch(watchUserState());

    await watchCartState(store.getState().cart)(store.dispatch)
};

const watchTick = () => requestAnimationFrame(async () => {
    await watchTickAction();

    setTimeout(watchTick, 1500);
});

watchTick();

export default store;