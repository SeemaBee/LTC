import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProviderAvailabilityState {
  isAvailable: boolean;
}

const initialState: ProviderAvailabilityState = {
  isAvailable: true,
};

const providerAvailabilitySlice = createSlice({
  name: 'providerAvailability',
  initialState,
  reducers: {
    setProviderAvailability: (state, action: PayloadAction<boolean>) => {
      state.isAvailable = action.payload;
    },
  },
});

export const { setProviderAvailability } = providerAvailabilitySlice.actions;

export default providerAvailabilitySlice.reducer;