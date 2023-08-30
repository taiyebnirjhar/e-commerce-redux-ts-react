import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFilter {
  status: boolean;
  priceRange: number;
}

const initialState: IFilter = {
  status: false,
  priceRange: 150,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleStockStatus: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.status = payload;
    },
    addPriceRange: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.priceRange = payload;
    },
  },
});

export const { addPriceRange, toggleStockStatus } = filterSlice.actions;
export default filterSlice.reducer;
