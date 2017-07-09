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
  FREELANCERS_LOADED: 'FREELANCERS_LOADED'
}

export function freelanceersReducer(state: Array<IFreelancer> = [], action: Action): Array<IFreelancer> {
  switch (action.type) {
    case ACTIONS.FREELANCERS_LOADED:
      // Return the new state with the payload as freelancers list
      return Array.prototype.concat(action.payload);
    default:
      return state;
  }
}
