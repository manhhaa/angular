import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';
@Component({
  selector: 'app-amplifier',
  templateUrl: './amplifier.component.html',
  styleUrls: ['./amplifier.component.css']
})
export class AmplifierComponent implements OnInit  {
  amplifers = [
    {
      id: 1,
      productContent: "Cremona SV-130 Premier Novice Violin Outfit Full Size",
      price: 88.00,
      img: "/assets/img/amplifier.jpg",
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
