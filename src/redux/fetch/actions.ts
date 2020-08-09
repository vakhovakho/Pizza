import { FetchActions } from "../actionTypes"
import ReduxAction from "../Contracts/ReduxAction";

export const begin = (): ReduxAction => ({
    type: FetchActions.FETCH_BEGIN,
    payload: {}
});

export const finish = (error: string = ""): ReduxAction => ({
    type: FetchActions.FETCH_FINISH,
    payload: {
        error: error
    }
});