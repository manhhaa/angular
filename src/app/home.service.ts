import { Injectable } from '@angular/core';
  import {BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // public _subject = new Subject();

  public cartItemList : any = [];
  public cartItemDetail : any = [];
  public keySearch: string = '';
  public search = new BehaviorSubject<string>("");

  public _behaviorSubject = new BehaviorSubject<any>([]);
  constructor() {
    console.log(this.item)
  }

  getProducts(){
    return this._behaviorSubject.asObservable()
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this._behaviorSubject.next(product);
  }

  setKeySearch(key:any) {
    this.keySearch = key;
    this._behaviorSubject.next(key)
  }

  showDetailProduct(product: any) {
    this.cartItemDetail.push(product);
    this._behaviorSubject.next(this.cartItemDetail);
  }


  addToCart(product: any){
    this.cartItemList.push(product);
    this._behaviorSubject.next(this.cartItemList);
    this.getTotalProduct();
    console.log(this.cartItemList)
  }

  getTotalProduct() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllCart(){
    this.cartItemList = [];
    this._behaviorSubject.next(this.cartItemList);
  }


  item: Array<object> = [];
}
