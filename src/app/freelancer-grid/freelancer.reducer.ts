import { Action } from '@ngrx/store';

export interface IFreelancer {
  name: string,
  email: string,
  thumbnail: string
}

export interface AppState {
  freelancers: Array<IFreelancer>
}

export const ACTIONS = {
  FREELANCERS_LOADED: 'FREELANCERS_LOADED',
  DELETE_FREELANCER: 'DELETE_FREELANCER'
};

export function freelancersReducer(state: Array<IFreelancer> = [], action: Action): Array<IFreelancer> {
  switch (action.type) {
    case ACTIONS.FREELANCERS_LOADED:
      // Return the new state with the payload as freelancers list
      return Array.prototype.concat(action.payload);
    case ACTIONS.DELETE_FREELANCER:
      // Remove the element from the array
      state.splice(state.indexOf(action.payload), 1);
      // We need to create another reference
      return Array.prototype.concat(state);
    default:
      return state;
  }
}
