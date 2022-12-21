import {Component,OnInit} from '@angular/core';
import {HomeService} from  '../../home.service';
import {DetailService} from  '../../detail.service';
@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.css']
})
export class DrumComponent implements OnInit {

  drums = [
    {
      id: 1,
      productContent: "Mendini MDS80-BK Complete Full Size Senior 5-Piece",
      price: 254.00,
      img: "/assets/img/drum1.jpg",
    },]
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
