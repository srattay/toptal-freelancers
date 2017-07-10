import { Action } from '@ngrx/store';

export interface IFilter {
  name: string,
  email: string,
}

export const ACTIONS = {
  UPDATE_FILTER: 'UPDATE_FILTER',
  CLEAR_FILTER: 'CLEAR_FILTER',
};

const initialState = { name: '', email: '' };

export function filterReducer(state: IFilter = initialState, action: Action): IFilter {
  switch (action.type) {
    case ACTIONS.UPDATE_FILTER:
      // Create a new state from payload
      return Object.assign({}, action.payload);
    case ACTIONS.CLEAR_FILTER:
      // Create a new state from initial state
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
