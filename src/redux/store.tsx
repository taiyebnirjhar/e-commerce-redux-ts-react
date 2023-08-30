import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import filterSlice from './features/filter/filterSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
