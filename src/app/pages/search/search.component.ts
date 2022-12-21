import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items = [
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
    {
      id: 5,
      productContent: "Casio CTKVK3 PAK 61-Key Premium Keyboard Bundle",
      price: 165.00,
      img: "/assets/img/keyboard1.jpg",
    },
    {
      id: 6,
      productContent: "Yamaha DGX650B Digital Piano",
      price: 121.00,
      img: "/assets/img/keyboard2.jpg",
    },
    {
      id: 7,
      productContent: "Hamzer 61 Key Electronic Music Piano Keyboard",
      price: 165.00,
      img: "/assets/img/keyboard3.jpg",
    },
    {
      id: 8,
      productContent: "Hamzer 61 Key Electric Music Keyboard Piano with Stand",
      price: 143.00,
      img: "/assets/img/keyboard4.jpg",
    },
    {
      id: 9,
      productContent: "Mendini MDS80-BK Complete Full Size Senior 5-Piece",
      price: 254.00,
      img: "/assets/img/drum1.jpg",
    },
    {
      id: 10,
      productContent: "Cremona SV-130 Premier Novice Violin Outfit Full Size",
      price: 88.00,
      img: "/assets/img/amplifier.jpg",
    },
    {
      id: 11,
      productContent: "Dean V Dave Mustaine Guitar Bolt-on Classic",
      price: 377.00,
      img: './assets/img/accordion1.jpg',
    },
    {
      id: 12,
      productContent:
        "Cecilio 4-4 CVNAE-Black+SR Ebony Fitted Acoustic-Electric Violin",
      price: 87.00,
      img: "./assets/img/accordion2.jpg",
    },
    {
      id: 13,
      productContent: "Hand Carved Coconut Karimba Mbira Thumb Piano",
      price: 46.00,
      img: "./assets/img/accordion3.jpg",
    },
    {
      id: 14,
      productContent: "Rizatti Bronco RB31GW Diatonic Accordion",
      price: 154.00,
      img: "./assets/img/accordion4.jpg",
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
