import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserItem = {
  dob: string;
  email: string;
  email_verified_at: string;
  gender: string;
  id: number;
  media: 'yes' | 'no';
  name: string;
  phone: string;
  professionalDetail: 'yes' | 'no';
  role: 'provider' | 'seeker';
};

export interface AuthState {
  loggedIn: boolean;
  token: string;
  role: 'provider' | 'seeker';
  user: UserItem | {};
}

const initialState: AuthState = {
  loggedIn: false,
  token: '',
  role: 'provider',
  user: <UserItem>{},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.loggedIn = action.payload.loggedIn;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: state => {
      state.loggedIn = false;
      state.token = '';
      state.role = 'provider';
    },
  },
});

export const { setAuth, logout, setRole } = authSlice.actions;

export default authSlice.reducer;
