import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Get the whole state
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Get user details
export const selectUser = createSelector(selectAuthState, (state) => state.user);
