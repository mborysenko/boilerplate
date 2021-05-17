import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";

function* exampleSaga(): SagaIterator {
    yield call(() => true);
}

export function* rootSaga(): SagaIterator {
    yield all([
        call(exampleSaga),
    ]);
}
