import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Requests } from 'features/provider/types/commonTypes';

const initialState: Requests[] = [];

const providerUpcomingJobsSlice = createSlice({
  name: 'providerRequests',
  initialState,
  reducers: {
    setProviderUpcomingJobs: (_, action: PayloadAction<Requests[]>) =>
      action.payload,
  },
});

export const { setProviderUpcomingJobs } = providerUpcomingJobsSlice.actions;

export default providerUpcomingJobsSlice.reducer;
