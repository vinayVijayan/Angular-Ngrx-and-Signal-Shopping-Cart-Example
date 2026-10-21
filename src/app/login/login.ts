import { Component, inject } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';
import {  Product } from '../services/cart.services';
import { Store } from '@ngrx/store';
import { selectCartItems, selectTotalCount, selectTotalPrice } from '../services/cart.selectors';
import { addToCart, clearCart } from '../services/cart.actions';
@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  constructor(){

  }
private store = inject(Store);

  cartItems = this.store.selectSignal(selectCartItems);
  totalCount = this.store.selectSignal(selectTotalCount);
  totalPrice = this.store.selectSignal(selectTotalPrice);
  productList:Product[] = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];
onProductAdded(product:Product){
this.store.dispatch(addToCart({ product }));
}

 clearAll() {
    this.store.dispatch(clearCart());
  }
}
