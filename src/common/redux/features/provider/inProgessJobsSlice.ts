import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Requests } from 'features/provider/types/commonTypes';

const initialState: Requests[] = [];

const providerIncomingJobsSlice = createSlice({
  name: 'providerRequests',
  initialState,
  reducers: {
    setProviderIncomingJobs: (_, action: PayloadAction<Requests[]>) =>
      action.payload,
  },
});

export const { setProviderIncomingJobs } = providerIncomingJobsSlice.actions;

export default providerIncomingJobsSlice.reducer;
