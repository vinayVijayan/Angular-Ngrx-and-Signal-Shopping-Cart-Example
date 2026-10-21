import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart } from './cart.actions';
import { Product } from './cart.services';

// 1. Define the shape of this slice of the Store
export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: []
};

// 2. The Reducer listens for actions and updates the state
export const cartReducer = createReducer(
  initialState,
  
  // When 'addToCart' is dispatched, copy the old state and add the new product
  on(addToCart, (state, action) => ({
    ...state,
    items: [...state.items, action.product]
  })),

  // When 'clearCart' is dispatched, reset the items array to empty
  on(clearCart, (state) => ({
    ...state,
    items: []
  }))
);