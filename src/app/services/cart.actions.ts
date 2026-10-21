import { createAction, props } from '@ngrx/store';
import { Product } from './cart.services';

export const addToCart = createAction(
  '[Product Grid] Add To Cart', 
  props<{ product: Product }>()
);

export const clearCart = createAction(
  '[Cart Summary] Clear Cart'
);