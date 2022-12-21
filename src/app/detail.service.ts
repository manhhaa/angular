import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {


  public cartItemDetail : any = [];

  public _behaviorSubject = new BehaviorSubject<any>([]);
  constructor() {
    console.log(this.item)
  }

  getProducts(){
    return this._behaviorSubject.asObservable()
  }

  setProduct(product: any){
    this.cartItemDetail.push(...product);
    this._behaviorSubject.next(product)
  }

  showDetailProduct(product: any) {
    this.cartItemDetail.push(product);
    this._behaviorSubject.next(this.cartItemDetail);
  }


  item: Array<object> = [];

}
