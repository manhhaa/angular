import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {


  guitars = [
    {
      id: 1,
      productContent: "Fender MA-1 3-4-Size Acoustic Guitar",
      price: 254.00,
      img: "/assets/img/guitar1.jpg",
    },
    {
      id: 2,
      productContent: "Oscar Schmidt OG1",
      price: 265.00,
      img: "/assets/img/guitar2.jpg",
    },
    {
      id: 3,
      productContent: "Yamaha FG700S Solid Top Acoustic Guitar, Natural",
      price: 254.00,
      img: "/assets/img/guitar3.jpg",
    },
    {
      id: 4,
      productContent:
        "Fender FA-100 Limited Edition Dreadnought Acoustic Guitar Bundle",
      price: 355.00,
      img: "/assets/img/guitar4.jpg",
    },
  ];
  searchKey:string="";
  constructor(private  _homeService: HomeService,private  _detailService: DetailService) {
    this._homeService.search.subscribe((val: any)=>{
      this.searchKey = val;
    })
  }
  ngOnInit() {}
  addToCart(item: any){
    this._homeService.addToCart((item))
  }
  showDetailItem(item: any) {
    this._detailService.showDetailProduct((item))
  }


}
