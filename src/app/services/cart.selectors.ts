import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

export const selectTotalCount = createSelector(
  selectCartItems,
  (items) => items.length
);

export const selectTotalPrice = createSelector(
  selectCartItems,
  (items) => items.reduce((sum, item) => sum + item.price, 0)
);