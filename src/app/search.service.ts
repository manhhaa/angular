import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public cartItemDetail : any = [];
  public keySearch: string = '';

  public _behaviorSubject = new BehaviorSubject<any>([]);
  constructor() {
    console.log(this.item)
  }

  getProducts(){
    return this._behaviorSubject.asObservable()
  }

  setKeySearch(key: any) {
    this.keySearch = key;
    this._behaviorSubject.next(key);
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
