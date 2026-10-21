import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

// 1. Grab the entire Cart object from the global Store
export const selectCartState = createFeatureSelector<CartState>('cart');

// 2. Slice out just the items array
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

// 3. Calculate the total count
export const selectTotalCount = createSelector(
  selectCartItems,
  (items) => items.length
);

// 4. Calculate the total price
export const selectTotalPrice = createSelector(
  selectCartItems,
  (items) => items.reduce((sum, item) => sum + item.price, 0)
);