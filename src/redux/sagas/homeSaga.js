import { put } from 'redux-saga/effects';
import { Images } from '../../utility/imageRes';
import { actionTypes } from '../services/actionTypes';
import callApis from '../services/apiCall';
import { API_PROMOTIONS_LIVE, API_QUICK_CATEGORY } from '../services/apiTypes';

export function* getHomeAction(action) {
    try {
        const data = yield callApis(action);
        let newData=[data]
        yield put({ type: actionTypes.HOME_SUCCESS, payload: newData })
    } catch (error) {
        yield put({ type: actionTypes.HOME_FAILURE, error: error })
    }
}