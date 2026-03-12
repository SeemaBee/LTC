import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Requests } from 'features/provider/types/commonTypes';

const initialState: Requests[] = [];

const providerCompletedJobsSlice = createSlice({
  name: 'providerRequests',
  initialState,
  reducers: {
    setProviderCompletedJobs: (_, action: PayloadAction<Requests[]>) =>
      action.payload,
  },
});

export const { setProviderCompletedJobs } = providerCompletedJobsSlice.actions;

export default providerCompletedJobsSlice.reducer;
