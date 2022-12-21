import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from '../../home.service';
import {DetailService} from '../../detail.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  @Input() showDetailProduct: any;

  public product : any = [];

  constructor(private _detailService: DetailService, public _homeService: HomeService) {
    this._detailService.getProducts().subscribe(res=>{
      this.product = res[res.length-1];
    })
  }

  ngOnInit() {
  }

  addToCart(item: any) {
    this._homeService.addToCart((item))
  }
}
