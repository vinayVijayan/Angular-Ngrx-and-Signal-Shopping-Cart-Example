import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart } from './cart.actions';
import { Product } from './cart.services';

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  
  on(addToCart, (state, action) => ({
    ...state,
    items: [...state.items, action.product]
  })),

  on(clearCart, (state) => ({
    ...state,
    items: []
  }))
);