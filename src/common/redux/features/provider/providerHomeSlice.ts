import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ChartObj = {
  month: string;
  highTmp: number;
};

export interface ProviderHomeState {
  jobsToday: number;
  completedJobs: number;
  todayEarnings: number;
  chartData: ChartObj[];
}

const initialState: ProviderHomeState = {
  jobsToday: 0,
  completedJobs: 0,
  todayEarnings: 0,
  chartData: [],
};

const providerHomeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProviderHomeData: (state, action: PayloadAction<ProviderHomeState>) => {
      state.jobsToday = action.payload.jobsToday;
      state.completedJobs = action.payload.completedJobs;
      state.todayEarnings = action.payload.todayEarnings;
      state.chartData = action.payload.chartData
    },
  },
});

export const { setProviderHomeData } = providerHomeSlice.actions;

export default providerHomeSlice.reducer;
