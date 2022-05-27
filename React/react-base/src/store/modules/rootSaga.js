import { all } from 'redux-saga/effects';

import example from './example/saga';

export default function* rootSaga() {
  return yield all([example]);
}
