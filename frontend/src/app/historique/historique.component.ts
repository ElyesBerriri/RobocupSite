import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  title = 'RoboSite';
  Arrayurl =[
    {url:"../../assets/img1.png"},
    {url:"../../assets/img2.png"},
    {url:"../../assets/img3.png"}
  ]
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:10000,
    autoplaySpeed:700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['〈','〉'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
