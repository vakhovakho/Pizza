import ReduxAction from "../Contracts/ReduxAction";
import { FetchActions } from "../actionTypes";
import Fetch from "../Contracts/Fetch";

const initialState: Fetch = {
    fetching: 0,
    error: ""
}

const begin = (state: Fetch): Fetch => {
    return {
        ...state,
        fetching: state.fetching + 1
    }
}

const finish = (state: Fetch, error: string = ""): Fetch => {
    return {
        fetching: state.fetching - 1,
        error: error
    }
}

export default function(state: Fetch = initialState, action: ReduxAction): Fetch {
    switch(action.type) {
        case FetchActions.FETCH_BEGIN:
            return begin(state);
        case FetchActions.FETCH_FINISH:
            return finish(state, action.payload.error);
        default:
            return state;
    }
}
