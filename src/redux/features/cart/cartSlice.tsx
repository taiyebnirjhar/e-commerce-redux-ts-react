import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;

      const existing = state.products.find(
        (product) => product._id === payload._id
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push({ ...payload, quantity: 1 });
      }
      if (state.total >= 0) {
        state.total += payload.price;
      } else {
        state.total;
      }
    },

    removeOne: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;

      const existing = state.products.find(
        (product) => product._id === payload._id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== payload._id
        );
      }

      if (state.total >= 0) {
        state.total -= payload.price;
      } else {
        state.total;
      }
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;

      state.products = state.products.filter(
        (product) => product._id !== payload._id
      );
      if (state.total >= 0) {
        state.total -= payload.price * payload.quantity!;
      } else {
        state.total;
      }
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
