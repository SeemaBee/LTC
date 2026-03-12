import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProviderService {
  id: number;
  name: string;
  price: number;
}

const initialState: ProviderService[] = [];

const servicesListSlice = createSlice({
  name: 'servicesList',
  initialState,
  reducers: {
    setProviderServicesList: (_, action: PayloadAction<ProviderService[]>) =>
      action.payload,
  },
});

export const { setProviderServicesList } = servicesListSlice.actions;

export default servicesListSlice.reducer;
