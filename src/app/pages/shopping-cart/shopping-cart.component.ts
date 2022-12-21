import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {BehaviorSubject,Subject ,Unsubscribable} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements  OnInit{
  constructor(private _homeService: HomeService) {

  }
  public product : any = [];
  public grandTotal: number = 0;


  ngOnInit(): void{
    this._homeService.getProducts().subscribe(res=>{
      this.product = res;
      this.grandTotal = this._homeService.getTotalProduct();
    })
  }

  removeItem(item: any){
    this._homeService.removeCartItem(item);
    this.grandTotal = this._homeService.getTotalProduct();
  }

  emptyCart(){
    this._homeService.removeAllCart();
  }
}
