import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProviderIdProof {
  id: number;
  name: string;
}

const initialState: ProviderIdProof[] = [];

const idProofListSlice = createSlice({
  name: 'idProofList',
  initialState,
  reducers: {
    setProviderIdProofList: (_, action: PayloadAction<ProviderIdProof[]>) =>
      action.payload,
  },
});

export const { setProviderIdProofList } = idProofListSlice.actions;

export default idProofListSlice.reducer;
