import { takeLatest } from 'redux-saga/effects';
import { ADD_FEED , addFeed } from './feed';

function* mySaga () {
    yield takeLatest( ADD_FEED , addFeed );
}

export default mySaga;