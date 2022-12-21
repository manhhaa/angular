import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  keyboards = [
    {
      id: 1,
      productContent: "Casio CTKVK3 PAK 61-Key Premium Keyboard Bundle",
      price: 165.00,
      img: "/assets/img/keyboard1.jpg",
    },
    {
      id: 2,
      productContent: "Yamaha DGX650B Digital Piano",
      price: 121.00,
      img: "/assets/img/keyboard2.jpg",
    },
    {
      id: 3,
      productContent: "Hamzer 61 Key Electronic Music Piano Keyboard",
      price: 165.00,
      img: "/assets/img/keyboard3.jpg",
    },
    {
      id: 4,
      productContent: "Hamzer 61 Key Electric Music Keyboard Piano with Stand",
      price: 143.00,
      img: "/assets/img/keyboard4.jpg",
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
