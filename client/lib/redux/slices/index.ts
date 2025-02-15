import { combineReducers, UnknownAction } from '@reduxjs/toolkit';

import modal from '@lib/redux/slices/modalSlice';

export interface CombinedSliceState {
  modal: ModalState;
}

export default function rootReducer(
  state: CombinedSliceState,
  action: UnknownAction,
) {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        modal,
      });
      return combinedReducer(state, action);
    }
  }
}
