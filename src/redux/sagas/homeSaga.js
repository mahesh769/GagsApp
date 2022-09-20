import { put } from 'redux-saga/effects';
import { Images } from '../../utility/imageRes';
import { actionTypes } from '../services/actionTypes';
import callApis from '../services/apiCall';
import { API_PROMOTIONS_LIVE, API_QUICK_CATEGORY } from '../services/apiTypes';

export function* getHomeAction() {


    let response = {
        available_bal: "3000", card_holdername: "Mark Henary", card_number: "5647   3411   2413   2020", expairty_date: "12/20", cvv: 456, debit_card_limit: "5000", spent_limit: "345"
        , history: [
            { title: "Samosa", subtitle: "Samosa is very famous and it's test very nice", image:Images.IMG_FOOD,price:20,special_price:14,delivery_fee:20 },
            { title: "Ladu", subtitle: "Ladu is very famous and it's test very nice", image:Images.IMG_FOOD,price:200,delivery_fee:20},
            { title: "Rasgulla", subtitle: "Rasgulla is very famous and it's test very nice", image:Images.IMG_RESS,price:300,special_price:260,delivery_fee:20},
            { title: "Samosa", subtitle: "Samosa is very famous and it's test very nice", image:Images.IMG_FOOD,price:20,delivery_fee:20 },
            { title: "Ladu", subtitle: "Ladu is very famous and it's test very nice", image:Images.IMG_FOOD,price:200,special_price:190,delivery_fee:20},
            { title: "Rasgulla", subtitle: "Rasgulla is very famous and it's test very nice", image:Images.IMG_RESS,price:300,special_price:260,delivery_fee:20},

        ]
    };

    try {
        const data = response
        yield put({ type: actionTypes.HOME_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: actionTypes.HOME_FAILURE, error: error })
    }
}