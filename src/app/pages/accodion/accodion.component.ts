import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';
@Component({
  selector: 'app-accodion',
  templateUrl: './accodion.component.html',
  styleUrls: ['./accodion.component.css']
})
export class AccodionComponent implements OnInit {
  accordions = [
    {
      id: 1,
      productContent: "Dean V Dave Mustaine Guitar Bolt-on Classic",
      price: 377.00,
      img: './assets/img/accordion1.jpg',
    },
    {
      id: 2,
      productContent:
        "Cecilio 4-4 CVNAE-Black+SR Ebony Fitted Acoustic-Electric Violin",
      price: 87.00,
      img: "./assets/img/accordion2.jpg",
    },
    {
      id: 3,
      productContent: "Hand Carved Coconut Karimba Mbira Thumb Piano",
      price: 46.00,
      img: "./assets/img/accordion3.jpg",
    },
    {
      id: 4,
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

