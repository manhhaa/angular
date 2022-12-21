import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AJS Basic';
  keyboards = [
    {
      id: 1,
      productContent: "Casio CTKVK3 PAK 61-Key Premium Keyboard Bundle",
      price: "$165.00",
      img: "/assets/img/keyboard1.jpg",
    },
    {
      id: 2,
      productContent: "Yamaha DGX650B Digital Piano",
      price: "$121.00",
      img: "/assets/img/keyboard2.jpg",
    },
    {
      id: 3,
      productContent: "Hamzer 61 Key Electronic Music Piano Keyboard",
      price: "$165.00",
      img: "/assets/img/keyboard3.jpg",
    },
    {
      id: 4,
      productContent: "Hamzer 61 Key Electric Music Keyboard Piano with Stand",
      price: "$143.00",
      img: "/assets/img/keyboard4.jpg",
    },
  ];

}
