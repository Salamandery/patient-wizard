import { all } from 'redux-saga/effects';

import { saga as multistep } from './multistep/saga';

export default function* rootSaga() {
    return yield all([multistep]);
};