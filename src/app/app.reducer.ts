import { StateModel } from './shared/models/state.model';
import { AppActions } from './app.actions';

const initialState: StateModel = {
  isLoading: false
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.START_LOADING:
      return {
        isLoading: true
      };
    case AppActions.STOP_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
