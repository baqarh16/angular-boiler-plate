import { createAction, props } from '@ngrx/store';

// Define Actions
export const login = createAction('[Auth] Login', props<{ user: any }>());
export const logout = createAction('[Auth] Logout');
