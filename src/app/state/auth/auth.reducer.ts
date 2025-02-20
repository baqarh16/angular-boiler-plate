import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null
};

// Create Reducer
export const authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, user })),
  on(logout, state => ({ ...state, user: null }))
);
