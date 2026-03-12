import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Requests } from 'features/provider/types/commonTypes';

const initialState: Requests[] = [];

const providerNewRequestsSlice = createSlice({
  name: 'providerRequests',
  initialState,
  reducers: {
    setProviderNewRequests: (_, action: PayloadAction<Requests[]>) =>
      action.payload,
  },
});

export const { setProviderNewRequests } = providerNewRequestsSlice.actions;

export default providerNewRequestsSlice.reducer;
