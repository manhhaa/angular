import { Component,OnInit } from '@angular/core';
import {HomeService} from '../../home.service';
import {BehaviorSubject,Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private _homeService: HomeService) {
  }
  ngOnInit(): void {
    this._homeService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
    console.log(this.totalItem)
  }

  setKeySearch(key: any) {
    this._homeService.setKeySearch(key);
  }

  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this._homeService.search.next(this.searchTerm)
  }
}
