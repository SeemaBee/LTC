import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Requests } from 'features/provider/types/commonTypes';

const initialState: Requests[] = [];

const providerAcceptedRequestsSlice = createSlice({
  name: 'providerRequests',
  initialState,
  reducers: {
    setProviderAcceptedRequests: (_, action: PayloadAction<Requests[]>) =>
      action.payload,
  },
});

export const { setProviderAcceptedRequests } = providerAcceptedRequestsSlice.actions;

export default providerAcceptedRequestsSlice.reducer;
