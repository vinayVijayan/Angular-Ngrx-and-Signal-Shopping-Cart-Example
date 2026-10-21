import { createAction, props } from '@ngrx/store';
import { Product } from './cart.services';

// 1. The user clicked "Add to Cart" and handed us a product
export const addToCart = createAction(
  '[Product Grid] Add To Cart', 
  props<{ product: Product }>()
);

// 2. The user clicked the "Clear Cart" button
export const clearCart = createAction(
  '[Cart Summary] Clear Cart'
);